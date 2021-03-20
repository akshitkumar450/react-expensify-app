import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    // @@INIT is used to test the default state
    // this has given by redux
    const state = expenseReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

//  we have used expenses array for testing
test('should remove expenses by valid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: expenses[1].id
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not  remove expenses by invalid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '-1'
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
})

// add

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            des: 'pe',
            note: '',
            amount: 19,
            createdAt: 0
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

// edit

test('should edit expense with valid id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        expense: {
            id: expenses[0].id,
            updates: {
                des: 'fevicol'
            }
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state[0].des).toBe(action.expense.updates.des)
})

test('should  not edit expense with invalid id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        expense: {
            id: '-2',
            updates: {
                des: 'fevicol'
            }
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
})