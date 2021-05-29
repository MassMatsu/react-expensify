import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import {Header} from '../../components/Header';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  //expect(wrapper.find('h1').text()).toBe('Expensify')
  //expect(toJSON(wrapper)).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot();
  // const renderer = new ReactShallowRenderer() // create virtual DOM
  // renderer.render(<Header/>)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
  // console.log(renderer.getRenderOutput()) // console log on terminal to see the component being rendered
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn()
  const wrapper = shallow(<Header startLogout={startLogout} />)
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled()
})


