import filterReducer from '../../reducers/filter'
import moment from 'moment'

test('should setup filter default value', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should setup sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should setup sortBy to date', () => {
    const currState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filterReducer(currState, action)
    expect(state.sortBy).toBe('date')
})

test('should setup text filter', () => {
    const text = 'rent'
    const action = {
        type: 'SET_TEXT',
        filter: {
            text
        }
    }
    const state = filterReducer(undefined, action)
    expect(state.text).toBe(text)
})

test('should set start date', () => {
    const startDate = moment()
    const action = {
        type: 'START_DATE',
        filter: {
            startDate
        }
    }
    const state = filterReducer(undefined, action)
    // toEqual has used bcz we have used moment instance which is an object
    expect(state.startDate).toEqual(
        startDate
    )
})

test('should set end date', () => {
    const endDate = moment()
    const action = {
        type: 'END_DATE',
        filter: {
            endDate
        }
    }
    const state = filterReducer(undefined, action)
    expect(state.endDate).toEqual(
        endDate
    )
})