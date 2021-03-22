import moment from 'moment'

export const filters = {
    test: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export const altfilters = {
    test: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}