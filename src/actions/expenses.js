import { v4 as uuidv4 } from 'uuid';
import firebase from '../firebase/firebase'
// Add_expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

// redux does not allow to dispatch functions(use thunk middleware for this)
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { des = '', note = '', amount = 0, createdAt = 0 } = expenseData
        const expense = { des, note, amount, createdAt }
        firebase.database().ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}
// remove_expense
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
})
// edit_expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    expense: {
        id,
        updates
    }
})
