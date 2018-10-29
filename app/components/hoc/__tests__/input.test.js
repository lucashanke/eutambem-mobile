import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import input from '../input';

const WrappedComponent = () => <Text>WrappedComponent</Text>;
const Input = input(WrappedComponent);

describe('input', () => {
  it('always renders WrappedComponent', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find(WrappedComponent)).toHaveLength(1);
  });

  it('initiates valid state attribute with value false when prop required is true', () => {
    const wrapper = shallow(<Input required />);
    expect(wrapper.state('valid')).toBeFalsy();
  });

  it('initiates valid state attribute with value true when prop required is false', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.state('valid')).toBeTruthy();
  });

  it('does not show alert icon when showValidation is false', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('Icon')).toHaveLength(0);
  });

  it('shows alert icon when showValidation is true and valid state sttribute is false', () => {
    const wrapper = shallow(<Input
      required
      showValidation
    />);
    expect(wrapper.state('valid')).toBeFalsy();
    expect(wrapper.find('Icon')).toHaveLength(1);
  });

  it('does not alert icon when showValidation is true and valid state sttribute is true', () => {
    const wrapper = shallow(<Input showValidation />);
    expect(wrapper.state('valid')).toBeTruthy();
    expect(wrapper.find('Icon')).toHaveLength(0);
  });

  describe('onValueChange', () => {
    let spy = null;

    beforeEach(() => {
      spy = sinon.spy();
    });

    it('does not change valid state attribute to true when valid param is false', () => {
      const wrapper = shallow(<Input
        value={undefined}
        required
        onValueChange={spy}
      />);
      expect(wrapper.state('valid')).toBeFalsy();

      wrapper.instance().onValueChange('new value', false);

      expect(wrapper.state('valid')).toBeFalsy();
    });

    it('changes valid state attribute to true when input new value is non empty and valid param is true', () => {
      const wrapper = shallow(<Input
        value={undefined}
        required
        onValueChange={spy}
      />);
      expect(wrapper.state('valid')).toBeFalsy();

      wrapper.instance().onValueChange('new value', true);

      expect(wrapper.state('valid')).toBeTruthy();
    });

    it('calls onValueChange callback prop function with new value', () => {
      const wrapper = shallow(<Input
        value={undefined}
        required
        onValueChange={spy}
      />);

      wrapper.instance().onValueChange('new value');

      expect(spy.calledWith('new value')).toBeTruthy();
    });

    it('calls onValueChange callback with valid false if required and value is null', () => {
      const wrapper = shallow(<Input
        required
        onValueChange={spy}
      />);

      wrapper.instance().onValueChange(null);

      expect(spy.calledWith(null, false)).toBeTruthy();
    });

    it('calls onValueChange callback with valid false if required and value is empty array', () => {
      const wrapper = shallow(<Input
        required
        onValueChange={spy}
      />);

      wrapper.instance().onValueChange([]);

      expect(spy.calledWith([], false)).toBeTruthy();
    });

    it('calls onValueChange callback with valid false if required and value is empty string', () => {
      const wrapper = shallow(<Input
        required
        onValueChange={spy}
      />);

      wrapper.instance().onValueChange('');

      expect(spy.calledWith('', false)).toBeTruthy();
    });

    it('calls onValueChange callback with valid true if required and value is defined', () => {
      const wrapper = shallow(<Input
        required
        onValueChange={spy}
      />);

      wrapper.instance().onValueChange('new value');

      expect(spy.calledWith('new value', true)).toBeTruthy();
    });

    it('calls onValueChange callback with valid true if not required', () => {
      const wrapper = shallow(<Input onValueChange={spy} />);

      wrapper.instance().onValueChange(null);

      expect(spy.calledWith(null, true)).toBeTruthy();
    });
  });
});
