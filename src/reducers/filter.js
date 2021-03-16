// default state for filters
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

// filter reducer
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.filter.text
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'START_DATE':
            return {
                ...state,
                startDate: action.filter.startDate
            }
        case 'END_DATE':
            return {
                ...state,
                endDate: action.filter.endDate
            }
        default:
            return state
    }
}

export default filterReducer