import React, { useState } from 'react';
import { NewExpense } from '../NewExpense/NewExpense';
import ExpensesFilter from '../Filter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

import './Expenses.css'


const Expenses = (props) => {
    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
    
    return (
        <li>
            <div className="expenses">
                <NewExpense onSaveExpenseData={saveExpenseDataHandler}/>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expense={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </div>
        </li>
    )
}

export default Expenses