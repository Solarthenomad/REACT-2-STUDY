import React from "react";
import classes from './Card.module.css';

const Card = props =>{
    //Card.module.css의 card가져오고 거기에 있는 css styling을 사용한다는 의미
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;