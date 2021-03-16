import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import './styles/style.css'

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

store.dispatch(addExpense({ des: 'Water bill' }))
store.dispatch(addExpense({ des: 'Gas bill' }))
store.dispatch(setTextFilter('bill'))
store.dispatch(setTextFilter('water'))

// add expense

ReactDOM.render(<AppRouter />, document.getElementById('app'))