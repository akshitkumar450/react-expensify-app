import { createStore, combineReducers } from 'redux'


// default state for expenses
const expenseReducerDefaultState = []

// expense reducer
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// default state for filters
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

// filter reducer
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// store
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
)

console.log(store.getState());

const demoState = {
    expenses: [
        {
            id: 'dasdsad',
            des: ' jan -rent',
            note: 'this was the final payment for add.',
            amount: 54500,
            createdAt: 0
        }
    ], filters: {
        text: 'rent',
        sortBy: 'amount',//date or amount,
        startDate: undefined,
        endDate: undefined
    }
};



