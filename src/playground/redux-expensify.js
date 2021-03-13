import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'; // to get random id
// action generators

// Add_expense
const addExpense = ({ des = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        des,
        note,
        amount,
        createdAt
    }
})

// remove_expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
})
// edit_expense
// sortbydate
// sortby amount
// setstartdate
// setendate


// default state for expenses
const expenseReducerDefaultState = []

// all the  action generators will be dispatched to both  reducers
// expense reducer
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // to add a new values to the array
            return [...state, action.expense]

        case 'REMOVE_EXPENSE':
            return state.filter((item) => item.id !== action.expense.id)

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

store.subscribe(() => {
    console.log(store.getState());
})

// we get the action object back when we dispatch which can be used 
const expenseOne = store.dispatch(addExpense({ des: 'rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ des: 'car', amount: 1080 }))
// console.log(expenseOne);

// remove an expense with the given id
const removeOne = store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// console.log(removeOne);

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



