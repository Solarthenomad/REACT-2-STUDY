import React from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css';
const AddUser = props =>{

    const addUserHandler =(event) =>{
        event.preventDefault();
    }
   return(

   <Card>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id = "username" type="text"/>
        <label htmlFor = "username">Age(Years)</label>
        <input id="username" type="text" />
        <button type ="submit"></button>
    </form>
    </Card>
   );
};

export default AddUser;