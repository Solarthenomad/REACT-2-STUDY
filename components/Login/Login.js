import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

//reducer 함수는 컴포넌트 함수 밖에서 작성된다. 굳이 안의 데이터를 사용하지 ㅇ낳기 때문 
const emailReducer = (state, action)=>{
    if (action.type === 'USER_INPUT'){
        return {value : action.val, isValid: action.val.includes('@')}
    }
    if(action.type ==='INPUT_BLUR'){
        return {value :state.value , isValid:state.valid.includes('@')}

    }
    return {value : '', isValid : 'false'};
};

const passwordReducer = (state, action)=>{
    if (action.type === 'USER_INPUT'){
        return {value : action.val, isValid: action.val.includes('@')}
    }
    if(action.type ==='INPUT_BLUR'){
        return {value :state.value , isValid:state.valid.includes('@')}

    }
    return {value : '', isValid : 'false'};
}


const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value : '',
    isValid:null,
  });

  const [passwrodState, dispatchPassword] = useReducer(passwordReducer,{
    value:'',
    isValid: null,
  });

const {isValid : emailIsValid } = emailState;
const {isValid : passwordIsValid } = passwrodState;

useEffect(()=>{
  const identifier = setTimeout(()=>{
    console.log('Checking form validity!');
    setFormIsValid(emailState.isValid && passwrodState.isValid);
  } , 500);

  return () =>{
    console.log('CLEANUP');
    clearTimeout(identifier);
  };
}, [emailIsValid, passwordIsValid]);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
   dispatchEmail({type : 'USER_INPUT', val : event.target.value});

    setFormIsValid(
      event.target.value.includes('@') && passwrodState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type : 'USER_INPUT', val : event.target.value})
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length >6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type : 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({
      type : 'INPUT_BLUR'
    });

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(emailState.value, enteredPassword);
    props.onLogin(emailState.value, passwrodState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.IsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwrodState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

// 중첩 속성을 useEffect에 종속성으로 추가하기
// 이전 강의에서 우리는 useEffect()에 객체 속성을 종속성으로 추가하기 위해 dstructuring을 사용했습니다.

// const { someProperty } = someObject;
// useEffect(() => {
//   // code that only uses someProperty ...
// }, [someProperty]);
// 이것은 매우 일반적인 패턴 및 접근 방식이며, 이것이 제가 일반적으로 이 방식을 사용하는 이유이며 여기서 보여드리는 이유입니다(코스 내내 계속 사용할 것입니다).

// 핵심은 우리가 destructuring을 사용한다는 것이 아니라, 전체 개체 대신 특정 속성을 종속성으로 전달한다는 것입니다.

// 우리는 이와 같이 코드를 작성할 수도 있으며 같은 방식으로 작동합니다.

// useEffect(() => {
//   // code that only uses someProperty ...
// }, [someObject.someProperty]);
// 이것은 잘 작동합니다!

// 하지만 여러분은 이 코드 사용을 피해야 합니다:

// useEffect(() => {
//   // code that only uses someProperty ...
// }, [someObject]);
// 왜 그럴까요?

// 왜냐하면 effect 함수는 someObject 가 변경될 때마다 재실행되기 때문이죠 - 단일 속성이 아닙니다 (someProperty 위의 예에서)

