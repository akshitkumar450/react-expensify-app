import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import './styles/style.css'

import { Provider } from 'react-redux'

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

store.dispatch(addExpense({ des: 'Water bill', amount: 45 }))
store.dispatch(addExpense({ des: 'Gas bill' }))
store.dispatch(setTextFilter('bill'))


// provider is use to provide the store to all our components that make up our application
// individual components can access the store
// step -1
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))