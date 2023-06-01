import React from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from './UI/Button';
import {useState} from 'react';
import ErrorModal from "../UI/ErrorModal";

const AddUser = props =>{
    const [enteredUsername, setEnteredUsername] = useState('');

    const [enteredAge, setEnteredAge] =useState('');

    const addUserHandler =(event) =>{
        event.preventDefault();
        
        //trim() : 앞 뒤 공백 제거(유효성 검사)
        if(enteredUsername.trim().length ===0 || enteredAge.trim().length ===0) {
            return ;
        }
        if(+enteredAge < 1) {
            return ;
        }
        //초기화 로직
        props.onAddUser(enteredUsername, enteredAge);
        console.log(enteredUsername + ' ' + enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);

    }

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }

   return(
    <div><ErrorModal title="An error occured!" message="Something went wrong!" 
    />
    <Card className={classes.input}>
           <form onSubmit={addUserHandler}>
               <label htmlFor="username">Username</label>
               <input id="username" value={enteredUsername} type="text" onChange={enteredUsername} />
               <label htmlFor="userage">Age(Years)</label>
               <input id="userage" value={ageChangeHandler} type="text" onChange={enteredAge} />
               <Button type="submit">Add User</Button>
           </form>

       </Card></div>
   );
};

export default AddUser;