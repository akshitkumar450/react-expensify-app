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
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    expense: {
        id,
        updates
    }
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    filter: {
        text
    }
})

// sortbydate
const setByDate = () => ({
    type: 'SORT_BY_DATE'
})

// sortby amount
const setByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// setstartdate
const setStartDate = (startDate = undefined) => ({
    type: 'START_DATE',
    filter: {
        startDate
    }
})
const setEndDate = (endDate = undefined) => ({
    type: 'END_DATE',
    filter: {
        endDate
    }
})

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

        case "EDIT_EXPENSE":
            return state.map((item) => {
                if (item.id === action.expense.id) {
                    return {
                        // it returns a new object with ->(using spread operator)
                        //  to get the old object
                        ...item,
                        //  and to update the old value with the new given value
                        ...action.expense.updates
                    }
                } else {
                    return item
                }
            })

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
        case 'SET_TEXT':
            return {
                ...state,
                text: action.filter.text
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'START_DATE':
            return {
                ...state,
                startDate: action.filter.startDate
            }
        case 'END_DATE':
            return {
                ...state,
                endDate: action.filter.endDate
            }
        default:
            return state
    }
}

// get the visible expenses(filtering expenses by filters)

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //  if startDate is undefined then it will return true ( not have effect)
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        // to filter by text
        const textMatch = expense.des.toLowerCase().includes(text.toLowerCase());

        // if all three are true then we will put in the array else it will be filtered out
        return startDateMatch && endDateMatch && textMatch;
    })
}

// store
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
)

//  for filtering expenses 
store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

// we get the action object back when we dispatch which can be used 
const expenseOne = store.dispatch(addExpense({ des: 'Rent', amount: 100, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ des: 'car', amount: 1080, createdAt: -1000 }))
// console.log(expenseOne);

// remove an expense with the given id
// const removeOne = store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// // console.log(removeOne);
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 4500 }))

store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(setByDate())
// store.dispatch(setByAmount())

store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
store.dispatch(setEndDate(1225))
// store.dispatch(setEndDate())

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
