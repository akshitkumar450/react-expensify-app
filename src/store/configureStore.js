import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filter';
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer,
            auth: authReducer
        }),
        // to use middleware that can dispatch function also
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;
}

