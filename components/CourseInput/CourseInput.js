import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl =styled.div`
//     margin : 0.5rem 0;

//     & label { // formControl의 label 태그에 대해서 속성 부여
//         font-weight: bold;
//         display: block;
//         margin-bottom : 0.5rem;
//         color : ${props => props.invalid ? 'red' : 'black'};
//     }

//     &input {
//         display : block;
//         width : 100%;
//         border : 1px solid ${props =>(props.invalid ?'red' : '#ccc')};
//         font : inherit;
//         line-height: 1.5rem;
//         padding : 0 0/25rem;
//         background: ${props => props.invalid ? 'red':'transparent'};
//     }

//     & input:focus {
//         outline : none;
//         background-color: #ffd7d7;
//         border-color: #8b005d;
        
//     }
//     &.invalid input {
//         border-color: red;
//         background-color: #ffd7d7;
//     }
//     &.invalid label {
//         color : red;
//     }

// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.valuetrim().length>0){
        setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length ===0){
        setIsValid(false);
        return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
        <div className = {`$styles['form-control']} ${!isValid &&styles.invalid}`}>
            <label>Course Goal</label>
            <input type= "text" onChange={goalInputChangeHandler}/>

        </div>
      {/* <div className="form-control invalid">
        <label style={{color : !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style = {{borderColor : !isValid? 'red' : '#ccc', background : !isValid ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler} />
      </div> */}
      {/* <div className={`form-control ${!isValid  ? 'invalid' : ''}`}> */}
      <FormControl className={!isValid && 'inValid'} invalid = {!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>

      {/* </div> */}
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;