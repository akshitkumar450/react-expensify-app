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

test('should render error for invalid form submission ', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    // to simulate any handler first we have to find it
    // second argument is for event handlerer e.preventDeafult()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    // to get the state value for testing 
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'new description'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = 'new note'
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set valid amount on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = '23.50'
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should not set invalid amount on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = '23.580'
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
})