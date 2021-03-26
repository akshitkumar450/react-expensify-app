import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter'
import './styles/style.css'
import 'react-dates/lib/css/_datepicker.css';

import { Provider } from 'react-redux'

import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import firebase from './firebase/firebase'

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
    // state is an object having expenses and filters
})

// provider is use to provide the store to all our components that make up our application
// individual components can access the store
// step -1
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// run when authenicate state is changed
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // unique user id
        store.dispatch(login(user.uid))
        console.log('uid', user.uid);
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    }
    else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

