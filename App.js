import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const  DUMMY_EXPENSES = [
  {
    id: 'el',
    title: 'Food',
    amount: 10,
    date: new Date(2022, 11,28),
  },
  { id: 'e2', title: 'Petrol', amount: 100, date: new Date(2022, 12, 1) },
  {
    id: 'e3',
    title: 'Movies',
    amount: 200,
    date: new Date(2022, 12, 5),
  },
];

const  App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //  'div',
  //  {},
  //  React.createElement('h2', {}, "Let's get started!"),
  //  React.createElement(Expenses, { items: expenses})
// );
  return (
   <div>
    <NewExpense onAddExpense={addExpenseHandler} />
   <Expenses items={expenses} />
  </div>
  );
}

export default App;