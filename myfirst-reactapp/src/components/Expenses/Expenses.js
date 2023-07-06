
import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpenseChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {


  const[filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = seletedYear =>{
    setFilteredYear(seletedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return(expense.date.getFullYear().toString() === filteredYear);
  })

  return (
    <Card className="expenses">
      <ExpenseFilter 
          selected = {filteredYear} 
          onChangeFilter ={filterChangeHandler}>
      </ExpenseFilter>

      <ExpenseChart expenses = {filteredExpenses}/>

      {/* terinary operator */}
      {filteredExpenses.length === 0 ? (<p>No expenses Found</p>) : (

        filteredExpenses.map( (ele)=>(
          <ExpenseItem 
          key = {ele.id}
          title ={ele.title} 
          amount ={ele.amount} 
          date = {ele.date}>
          </ExpenseItem>
      )))

      }

    </Card>
  );
}

export default Expenses;