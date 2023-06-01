import React from "react";
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = props =>{
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <fotter className={classes.action}>
                <Button onClick={props.onConfirm}>Okay</Button>

            </fotter>

        </Card>
        </div>

    );
};


export default ErrorModal;