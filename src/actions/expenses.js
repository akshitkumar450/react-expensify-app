import { v4 as uuidv4 } from 'uuid';
// Add_expense
export const addExpense = ({ des = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
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
