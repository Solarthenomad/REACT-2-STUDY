import React from "react";
import ExpenseItem from "./ExprenseItem";
import './ExpensesList.css';

const ExpnesesList = props => {
    let expensesContent = <p>No expenses Add</p>;

    if (props.items.length ===0) {
        return <h2 className = "expenses-list__fallback">Found no expenses</h2>;
    }
    if(props.items.length > 0) {
        expensesContent = props.items.map(()=>(
            <ExpenseItem
               key = {expense.id}
               title = {expense.title}
               amount = {expense.amount}
               date = {expense.date}
               />
        ))
    }
    return (
        <ul className = "expenses-list">
            {
                props.items.map(()=>(
                    <ExpenseItem
                       key = {expense.id}
                       title = {expense.title}
                       amount = {expense.amount}
                       date = {expense.date}
                       />
                ))
            }

        </ul>

    );




};