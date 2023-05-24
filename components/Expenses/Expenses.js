import Card from '../UI/Card';
import ExpenseItem from './ExprenseItem';
import React from 'react';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setfilteredYear] = useState('2020');

  const filterChangeHanlder =(selectedYear) =>{
    console.log('Expenses.js');
    console.log(selectedYear);
    setfilteredYear(selectedYear);

  }

  return (
    <div>
        
    
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear}onChangeFilter={filterChangeHanlder} />
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