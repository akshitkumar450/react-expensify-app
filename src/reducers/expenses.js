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

        case 'SET_EXPENSES':
            return action.expenses

        default:
            return state
    }
}

export default expenseReducer