import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const day = props.date.toLocaleString('pt-BR', {day:'2-digit'});
    const month = props.date.toLocaleString('pt-BR', {month:'short'});

    return (
        <div className="expense-date">
            <div className="expense-date__day-month">{day} {month.toUpperCase()}</div>            
        </div>
    )
}

export default ExpenseDate;