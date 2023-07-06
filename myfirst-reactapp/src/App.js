
import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const DummyData = [
   
  {
      id: 'e1',
      title: 'Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    }
 ];

const App = () => {
  
  
  const [expenses,setExpenses] = useState(DummyData);

   const addExpenseHandler = expense => {

    //setExpenses([expense, ...expenses]);//-------this is normal formal which can cause the data fetching inaccurate due to use state updates data in a queue
    
    setExpenses((prevExpenses) => {
        return [expense,...prevExpenses]; 
    //     //using prevstate is best approach
    });
  };
  

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;