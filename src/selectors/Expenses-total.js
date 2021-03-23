const ExpensesTotal = (expenses) => {
    if (expenses.length === 0) {
        return 0
    }
    else {
        return expenses.map((item) => item.amount).reduce((sum, value) => sum + value, 0)
    }
}
export default ExpensesTotal;