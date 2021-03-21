import React from 'react'
import Header from '../../components/Header'
import { shallow } from 'enzyme'

// if we use  snapshotSerializers in jest.config.json file  then toJSON will be used automatically
// import toJSON from 'enzyme-to-json'

// shalllow rendering ->it renders only the component
// full dom rendering-> it renders child compoenent also

// test('should render header correctly', () => {
//     const renderer = new ReactShallowRenderer()
//     renderer.render(<Header />)
//     //  for the first time it will create a new snapshot and it will pass the test case
//     // after the first test case it will match the output with the existing snapshot
//     expect(renderer.getRenderOutput()).toMatchSnapshot()
//     console.log(renderer.getRenderOutput());
// })

test('should render header correctly', () => {
    const wrapper = shallow(<Header />)
    // expect(toJSON(wrapper)).toMatchSnapshot()
    expect(wrapper).toMatchSnapshot()

    // expect(wrapper.find('h1').text()).toBe('Expensify App')
})