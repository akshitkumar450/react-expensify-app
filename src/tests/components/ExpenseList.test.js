import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList'
// it it the test data
import expenses from '../fixtures/expenses'

test('should render expense list with expense', () => {
    // ExpenseList take expenses array as a props
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense list with  no expense', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})

