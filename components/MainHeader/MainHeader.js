import React from "react";
import Navigation from "./Navigation";
import classes from './MainHeader.module.css';


const MainHeader =(props)=>{
    return (
        <header>
            <h1>A TypicalPage</h1>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout = {props.onLogout}/>
        </header>
    )
}