import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render expense form', () => {
    const wrapper = shallow(<ExpenseForm />)
    // first time this will pass ..but for 2nd time it will fail bcz the date in singlepicker will be changed due to moment()
    // to correct this we have used mocks
    expect(wrapper).toMatchSnapshot()
})

test('should render expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})