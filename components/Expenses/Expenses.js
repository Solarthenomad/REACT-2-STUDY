import Card from '../UI/Card';
import ExpenseItem from './ExprenseItem';
import React from 'react';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  
    const [filteredYear, setfilteredYear] = useState('2020');

  const filterChangeHanlder =(selectedYear) =>{
    console.log('Expenses.js');
    console.log(selectedYear);
    setfilteredYear(selectedYear);

  };

  const filteredExepnses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>
  if (filteredExpenses.length >0) {
    expensesContent=filteredExepnses.map((expense) => {
      <ExpenseItem
        key = {expense.id}
        title = {expense.title}
        amount = {expense.amount}
        date = {expense.date}
      />
    })
  }

  return (
    <div>
        
    
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear}onChangeFilter={filterChangeHanlder} />
    {/* {expensesContent} */}
    {/* expensesContent 대신 이것을 컴포넌트화시킨 expensesList 출력 */}
    <ExpensesList />
    {filteredExepnses.length ===0 && <p>No expenses found.</p>}

    {filteredExpenses.length ===0 ? (<p>No expensess found.</p>) : (
      filteredExpenses.map((expense) => (
        <ExpenseItem 
           key = {expense.id}
           title = {expense.title}
           amount = {expense.amount}
           date= {expense.date} />
      ))
    )}
    {/* 이렇게 mapping 한 게 아래의 ExpenseItem이랑 똑같은 거임 */}
    {props.items.map((expense, index) => (<ExpenseItem
    // 모든 아이템은 고유한 id(index)를 가져야함
     key = {expense.id}
     title = {expense.title}
     amount = {expense.amount} 
     date = {expense.date}/>
    ))}
    
    {/* map 메서드 : 다른배열로부터 새로운 배열을 생성하는데  원래 배열에 있는 모든 것들을 변환한다. */}
    {/* 사용 예시 const map1 = array1.map(x => x*2); */}
    {/* selected로 전달된 값은 expensefilter로 전달되고  expensefilter로 전달되고 드롭다운으로 사용된다. */}
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />

      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />

      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />

      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />

    </Card>
    </div>
  );
}

export default Expenses;