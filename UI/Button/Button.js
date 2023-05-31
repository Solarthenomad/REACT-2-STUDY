import React from "react";
import styles from './Button.css';
// import React from "react";
// import styled from 'styled-components';
// import './Button.css';

// const Button = styled.button`
//     width : 100%;
//     font : inherit;
//     padding : 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color : white;
//     background-color: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor : pointer;

//     @media (min-width : 768px) {
//         width : auto;

//     }

//     &:focus {
//         outline : none;
//     }



// `;

// //focus에서 focus 속성이 부여되면 outline : none 해



const Button = props =>{
    return (
        <button type = {props.type} className = {styles.button} onClick = {props.onClick}> 
            {props.children}
        </button>
     );
 };

 export default Button;