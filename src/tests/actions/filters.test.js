import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'
import moment from 'moment'

test('set start date action', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'START_DATE',
        filter: {
            startDate: moment(0)
        }
    })
})

test('set end date action', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'END_DATE',
        filter: {
            endDate: moment(0)
        }
    })
})

test('set text filter action with given value', () => {
    const action = setTextFilter('rent')
    expect(action).toEqual({
        type: 'SET_TEXT',
        filter: {
            text: 'rent'
        }
    })
})

test('set text filter action with default value', () => {
    const action = setTextFilter('')
    expect(action).toEqual({
        type: 'SET_TEXT',
        filter: {
            text: ''
        }
    })
})

test('sort by date action', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('sort by amount action', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})