import 'react-native';
import React, { Component } from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import input from '../input';

const WrappedComponent = () => (<Text>WrappedComponent</Text>);
const Input = input(WrappedComponent);

describe('input', () => {

  it('always renders WrappedComponent', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find(WrappedComponent)).toHaveLength(1);
  });

  describe('onValueChange', () => {

    let spy = null;

    beforeEach(() => {
      spy = sinon.spy();    
    })

    it('calls onValueChange callback prop function with new value', () => {
      const wrapper = shallow(<Input value={undefined} required onValueChange={spy} onValueChange={spy}/>);

      wrapper.instance().onValueChange('new value');

      expect(spy.calledWith('new value')).toBeTruthy();
    });

    it('calls onValueChange callback with valid false if required and value is null', () => {
      const wrapper = shallow(<Input required onValueChange={spy}/>);

      wrapper.instance().onValueChange(null);

      expect(spy.calledWith(null, false)).toBeTruthy();
    });

    it('calls onValueChange callback with valid false if required and value is empty array', () => {
      const wrapper = shallow(<Input required onValueChange={spy}/>);

      wrapper.instance().onValueChange([]);

      expect(spy.calledWith([], false)).toBeTruthy();
    });

    it('calls onValueChange callback with valid false if required and value is empty string', () => {
      const wrapper = shallow(<Input required onValueChange={spy}/>);

      wrapper.instance().onValueChange('');

      expect(spy.calledWith('', false)).toBeTruthy();
    });

    it('calls onValueChange callback with valid true if required and value is defined', () => {
      const wrapper = shallow(<Input required onValueChange={spy}/>);

      wrapper.instance().onValueChange('new value');

      expect(spy.calledWith('new value', true)).toBeTruthy();
    });

    it('calls onValueChange callback with valid true if not required', () => {
      const wrapper = shallow(<Input onValueChange={spy}/>);

      wrapper.instance().onValueChange(null);

      expect(spy.calledWith(null, true)).toBeTruthy();
    });
  });

});
