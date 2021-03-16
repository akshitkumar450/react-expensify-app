const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //  if startDate is undefined then it will return true ( not have effect)
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        // to filter by text
        const textMatch = expense.des.toLowerCase().includes(text.toLowerCase());

        // if all three are true then we will put in the array else it will be filtered out
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }

        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })

    //the output of the return is an array.so we can use sort on it directly
}

export default getVisibleExpenses