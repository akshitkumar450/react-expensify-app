import ExpensesTotal from '../../selectors/Expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 amount', () => {
    const res = ExpensesTotal([])
    expect(res).toBe(0)
})

test('should return total of a single expense', () => {
    const res = ExpensesTotal([expenses[0]])
    expect(res).toBe(195)
})
test('should return total of a multiple expense', () => {
    const res = ExpensesTotal(expenses)
    expect(res).toBe(114195)
})