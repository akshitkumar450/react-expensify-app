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
        return firebase.database().ref('expenses').push(expense).then((ref) => {
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

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return firebase.database().ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}

// edit_expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    expense: {
        id,
        updates
    }
})

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return firebase.database().ref(`expenses/${id}`).update(updated).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch) => {
        return firebase.database().ref('expenses').once('value').then((snapshot) => {
            const expenses = []
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}