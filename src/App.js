import React, {useState} from 'react';
import Expenses from './Components/Expenses/Expenses';

import './App.css';

const DUMMY_EXPENSES = [ 
  {
    id: 0,
    title: 'Book: The Art of Animation', 
    amount: 100.00, 
    date:new Date(2022, 1, 15)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <Expenses items={expenses} onAddExpense={addExpenseHandler}/> 
    </div>
  );
}

export default App;
