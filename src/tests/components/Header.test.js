import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import Header from '../../components/Header'

// shalllow rendering ->it renders only the component
// full dom rendering-> it renders child compoenent also

test('should render header correctly', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Header />)
    //  for the first time it will create a new snapshot and it will pass the test case
    // after the first test case it will match the output with the existing snapshot
    expect(renderer.getRenderOutput()).toMatchSnapshot()
    console.log(renderer.getRenderOutput());
})