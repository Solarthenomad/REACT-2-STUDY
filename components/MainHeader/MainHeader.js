import React from "react";
import Navigation from "./Navigation";
import classes from './MainHeader.module.css';


const MainHeader =(props)=>{
    return (
        <header className={classes['main-header']}>
            <h1>A Typical page</h1>
            {/* <Navigation isLoggedIn ={props.isAuthenticated} onLogout = {props.onLogout}/>
            //MainHeader에서 Navihation으로의 데이터 전달을 중지한다.  */}
            <Navigation onLogout = {props.onLogout}/>
        </header>
    )
}