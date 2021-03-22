import React from 'react';
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { shallow } from 'enzyme'
import { filters, altfilters } from '../fixtures/filters'

let setTextFilter, sortBydate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter: jest.fn()
    sortBydate: jest.fn()
    sortByAmount: jest.fn()
    setStartDate: jest.fn()
    setEndDate: jest.fn()

    wrapper = shallow(<ExpenseListFilters
        setTextFilter={setTextFilter}
        sortBydate={sortBydate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        filters={filters}
    />)
})

test('should render expenselist filters', () => {
    expect(wrapper).toMatchSnapshot()
})


test('should render expenselist altfilters', () => {
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot()
})


