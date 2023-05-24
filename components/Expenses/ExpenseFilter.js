import React from "react";
import './Expenses/ExpenseFilter.css';


const expenseFilter = (props) =>{
    //console.log대신 expenses(props)의 onChangeFilter을 가져옴 

    const dropdownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
// 이친구들이 expenses.js로 보내지게 된다. 
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select onChange={dropdownChangeHandler} value={props.selected}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
            </div>
        </div>
    )
}