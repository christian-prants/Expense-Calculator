import React from 'react'

import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
    const chartDatapoints = [
        {label: 'Jan', value: 0},
        {label: 'Fev', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Abr', value: 0},
        {label: 'Mai', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Ago', value: 0},
        {label: 'Set', value: 0},
        {label: 'Out', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dez', value: 0}
    ];

    for (const expense of props.expense) {
        const expenseMonth = expense.date.getMonth();
        chartDatapoints[expenseMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDatapoints}/>
    )
}

export default ExpensesChart
