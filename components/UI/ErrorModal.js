import React from "react";
import Card from './Card';
import Button from './Button';

const ErrorModal = props =>{
    return (
        <Card>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <fotter>
                <Button>Okay</Button>

            </fotter>

        </Card>

    );
};


export default ErrorModal;