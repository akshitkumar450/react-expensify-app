export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    filter: {
        text
    }
})

// sortbydate
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// sortby amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// setstartdate
export const setStartDate = (startDate = undefined) => ({
    type: 'START_DATE',
    filter: {
        startDate
    }
})
export const setEndDate = (endDate = undefined) => ({
    type: 'END_DATE',
    filter: {
        endDate
    }
})
