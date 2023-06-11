import React, { useState,useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
// 전 강의에서 useEffect() 종속성에 대해 살펴보았습니다.

// effect 함수에서 사용하는 "모든 것"을 종속성으로 추가해야 함을 배웠습니다. 즉, 거기에서 사용하는 모든 상태 변수와 함수를 포함합니다.

// 맞는 말이지만 몇 가지 예외가 있습니다. 다음 사항을 알고 있어야 합니다.

// 여러분은 상태 업데이트 기능을 추가할 필요가 없습니다. (지난 강의에서 했던 것처럼 setFormIsValid 사용): React는 해당 함수가 절대 변경되지 않도록 보장하므로 종속성으로 추가할 필요가 없습니다.

// 여러분은 또한 "내장" API 또는 함수를 추가할 필요가 없습니다 fetch(), 나 localStorage 같은 것들 말이죠 (브라우저에 내장된 함수 및 기능, 따라서 전역적으로 사용 가능): 이러한 브라우저 API/전역 기능은 React 구성 요소 렌더링 주기와 관련이 없으며 변경되지 않습니다.

// 여러분은 또한 변수나 함수를 추가할 필요가 없습니다. 아마도 구성 요소 외부에서 정의했을 겁니다 (예: 별도의 파일에 새 도우미 함수를 만드는 경우): 이러한 함수 또는 변수도 구성 요소 함수 내부에서 생성되지 않으므로 변경해도 구성 요소에 영향을 주지 않습니다 (해당 변수가 변경되는 경우, 또는 그 반대의 경우에도 구성 요소는 재평가되지 않습니다)

// 간단히 말해서: effect 함수에서 사용하는 모든 "것들"을 추가해야 합니다. 구성 요소(또는 일부 상위 구성 요소)가 다시 렌더링 되어 이러한 "것들"이 변경될 수 있는 경우.그렇기 때문에 컴포넌트 함수에 정의된 변수나 상태, 컴포넌트 함수에 정의된 props 또는 함수는 종속성으로 추가되어야 합니다!




const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  
  useEffect(()=>{

    console.log('Checking form validity');
    setTimeout(()=>{
        setFormIsValid(
            enteredEmail.includes('@')&& enteredPassword.trim().length >6
        );

    },500);

    return()=>{
        console.log('CLEANUP');
        clearTimeout(identifier);
    };  //클린업 함수라고 함
   
  }, [setFormIsValid, enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
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
            value={enteredPassword}
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