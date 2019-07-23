import React from 'react';
import {shallow} from 'enzyme';
import {SignUp} from './SignUp';

//47.83 |       50 |    44.44 |    52.38
//... 33,35,37,80,99


describe('SignUp', () => {
  let wrapper
  let mockEvent = { 
    preventDefault: jest.fn(),
    target: {
    name: 'email',
    value: 'nathan.froeh@gmail.com'
  }}
  beforeEach(() => {
    wrapper = shallow(<SignUp />);
  })

  it('should match snapshot', () => {
    wrapper.setState({userExistsMessage: ''})
    expect(wrapper).toMatchSnapshot()
  })

  it('should render message', () => {
    wrapper.setState({userExistsMessage: 'user'})
    expect(wrapper).toMatchSnapshot()
  })

  it('should set state', () => {
    expect(wrapper.state('email')).toEqual('')
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('email')).toEqual('nathan.froeh@gmail.com')
  })

  it('should reset state', () => {
    wrapper.setState({
      name: '1', email: '1', password: '1'})
    expect(wrapper.state('name')).toEqual('1')
    expect(wrapper.state('email')).toEqual('1')
    expect(wrapper.state('password')).toEqual('1')
    wrapper.instance().resetInputs()
    expect(wrapper.state('name')).toEqual('')
    expect(wrapper.state('email')).toEqual('')
    expect(wrapper.state('password')).toEqual('')
  })

  it('should call handleSignUp on click', () => {
    wrapper.instance().handleSignUp = jest.fn()
    wrapper.find('.button').simulate('click')
    expect(wrapper.instance().handleSignUp).toHaveBeenCalled()
  })

})