import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Modal from 'react-native-modal';
import { PickerIOS } from 'react-native';

import { Picker } from '../Picker';

const props = {
  placeholder: 'Test Picker',
  items: [
    {
      value: '1',
      label: 'Label 1',
    },
    {
      value: '2',
      label: 'Label 2',
    },
  ],
  onValueChange: () => {},
};

describe('Picker', () => {
  it('renders TextInput with label corresponding to the value passed', () => {
    const wrapper = shallow(<Picker
      {...props}
      value="2"
    />);

    const textInput = wrapper.find('TextInput');

    expect(textInput).toHaveLength(1);
    expect(textInput.props().value).toBe('Label 2');
  });

  it('renders invisible modal at first', () => {
    const wrapper = shallow(<Picker {...props} />);

    const modal = wrapper.find(Modal);

    expect(modal).toHaveLength(1);
    expect(modal.props().isVisible).toBeFalsy();
  });

  it('renders invisible modal with a PickerIOS and its options inside of it', () => {
    const wrapper = shallow(<Picker {...props} />);

    const modal = wrapper.find(Modal);

    expect(modal).toHaveLength(1);
    const picker = modal.find(PickerIOS);
    expect(picker).toHaveLength(1);
    expect(picker.find(PickerIOS.Item)).toHaveLength(2);
  });

  it('renders visible modal when TextInput is focused', () => {
    const wrapper = shallow(<Picker {...props} />);

    wrapper.find('TextInput').simulate('focus');
    const modal = wrapper.find(Modal);

    expect(modal).toHaveLength(1);
    expect(modal.props().isVisible).toBeTruthy();
  });

  describe('PickerIOS', () => {
    describe('when value is changed', () => {
      it('does not change currentValue state attibute if value is -1', () => {
        const wrapper = shallow(<Picker {...props} />);

        wrapper
          .find(PickerIOS)
          .props()
          .onValueChange(-1);

        expect(wrapper.state('currentValue')).toBe('');
      });

      it('changes currentValue state attibute if value is not -1 ', () => {
        const wrapper = shallow(<Picker {...props} />);

        wrapper
          .find(PickerIOS)
          .props()
          .onValueChange(2);

        expect(wrapper.state('currentValue')).toBe(2);
      });
    });
  });

  describe('Modal buttons', () => {
    describe('Ok button', () => {
      it('calls onValueChange prop function with default value (first item for IOS) when no current value is defined', () => {
        const spy = sinon.spy();
        const wrapper = shallow(<Picker
          {...props}
          onValueChange={spy}
        />);

        wrapper.find({ testID: 'ok-button' }).simulate('press');

        expect(spy.calledWith('1')).toBeTruthy();
      });

      it('calls onValueChange prop function with current value if is defined', () => {
        const spy = sinon.spy();
        const wrapper = shallow(<Picker
          {...props}
          onValueChange={spy}
        />);
        wrapper.setState({ currentValue: '2' });

        wrapper.find({ testID: 'ok-button' }).simulate('press');

        expect(spy.calledWith('2')).toBeTruthy();
      });
    });

    describe('Cancel button', () => {
      it('does not call onValueChange prop function', () => {
        const spy = sinon.spy();
        const wrapper = shallow(<Picker
          {...props}
          onValueChange={spy}
        />);
        wrapper.setState({ modalVisible: true });

        const modal = wrapper.find(Modal);
        expect(modal.props().isVisible).toBeTruthy();

        wrapper.find({ testID: 'cancel-button' }).simulate('press');

        expect(spy.callCount).toBe(0);
      });
    });
  });
});
