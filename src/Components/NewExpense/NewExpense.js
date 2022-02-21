import React, { useState } from 'react'
import './NewExpense.css'
import './NewExpenseForm.css'

export const NewExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput ((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value};
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const [style,setStyle] = useState({display:'none'});
    const [styleNovaDespesa, setStyleNovaDespesa] = useState({display:'block'}); 

    const onClickShowHandler = () => {
        setStyle({display: 'block'});
        setStyleNovaDespesa({display: 'none'});
    };

    const onClickNoShowHandler = () => {
        setStyle({display: 'none'});
        setStyleNovaDespesa({display: 'block'});
    };
    
    return (
        <div>
            <div style={styleNovaDespesa} className="new-expense-btn">
                <button 
                    className='button-button'
                    onClick={onClickShowHandler}>Adicionar Nova Despesa
                </button>
            </div>
            <div style={style} className="new-expense">
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>descrição do gasto:</label>
                            <input
                                type='text'
                                value={enteredTitle}
                                onChange={titleChangeHandler}>
                            </input>
                        </div>
                        <div className="new-expense__control">
                            <label>valor do gasto:</label>
                            <input
                                type='number'
                                value={enteredAmount}
                                min="0.01"
                                step="0.01"
                                onChange={amountChangeHandler}>
                            </input>
                        </div>
                    </div>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>dia do gasto:</label>
                            <input
                                type='date'
                                min="01-01-2019"
                                max="31-12-2022"
                                value={enteredDate}
                                onChange={dateChangeHandler}>
                            </input>
                        </div>
                        <div className="new-expense__control">
                            <button type='button' onClick={onClickNoShowHandler}>Cancelar</button>
                            <button type='submit' onClick={onClickNoShowHandler}>Incluir</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
