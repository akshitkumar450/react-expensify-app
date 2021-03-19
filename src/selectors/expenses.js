import moment from 'moment'

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //  if startDate is undefined then it will return true ( not have effect)
        const createdAtMoment = moment(expense.createdAt)
        // for filtering by date
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        // to filter by text
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

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