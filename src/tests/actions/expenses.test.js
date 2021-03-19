import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should remove expense action ', () => {
    const action = removeExpense({ id: '123abc' });
    // for checking the values of the object and arrays we need to use toEqual method
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '123abc'
        }
    })
})

test('should edit expense action', () => {
    const action = editExpense('123abc', { note: 'new note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        expense: {
            id: '123abc',
            updates: {
                note: 'new note'
            }
        }
    })
})

test('should add expense action with  given values', () => {
    const expesneData = {
        des: 'rent',
        note: 'price of rent',
        amount: 10901,
        createdAt: 1000
    }
    const action = addExpense(expesneData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expesneData,
            // expect.any just give idea about the type of value it does not care about the value
            id: expect.any(String)
        }
    })
})

test('should add expense action with default values', () => {
    const expesneData = {
        des: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense(expesneData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expesneData,
            // expect.any just give idea about the type of value it does not care about the value
            id: expect.any(String)
        }
    })
})