import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler=(enteredExpenseData) => {

   const expenseData = {
    ...enteredExpenseData,
    id : Math.random().toString()
   };
    console.log(expenseData);
    props.onAddExpense(expenseData);//부모 컴포넌트에서 onAddExpense 속성을 불러온다. 

  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

//NewExpense 에서 data 와 state를 생성해주고, Expense로 넘겨주도록 만들어야한다. 
//근데 바로 newExpense에서 Expense로 넘겨주는 것이 불가능함 = NewExpense에서 생성한 data와 state를 App.js 컴포넌트를 거쳐서 Expense로 보내주어야 한다. 

