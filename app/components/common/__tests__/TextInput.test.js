import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { TextInput as NativeTextInput, TouchableOpacity } from 'react-native';

import { TextInput } from '../TextInput';

const props = {
  placeholder: 'Test TextInput',
  onValueChange: sinon.spy(),
};

describe('TextInput', () => {
  it('renders native TextInput', () => {
    const wrapper = shallow(<TextInput {...props} />);

    expect(wrapper.find(NativeTextInput)).toHaveLength(1);
  });

  it('does not render native TextInput inside a TouchableOpacity if editable', () => {
    const wrapper = shallow(<TextInput {...props} />);

    expect(wrapper.find(TouchableOpacity)).toHaveLength(0);
  });

  it('renders the native input inside a TouchableOpacity if editable is false', () => {
    const wrapper = shallow(<TextInput
      {...props}
      editable={false}
    />);

    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });

  it('calls onFocus prop when TouchableOpacity is pressed and editable is false', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<TextInput
      {...props}
      onFocus={spy}
      editable={false}
    />);

    wrapper.find(TouchableOpacity).simulate('press');

    expect(spy.callCount).toEqual(1);
  });

  it('onChangeText of native TextInput calls onValueChange prop', () => {
    const wrapper = shallow(<TextInput {...props} />);

    wrapper
      .find(NativeTextInput)
      .props()
      .onChangeText('new text');

    expect(props.onValueChange.calledWith('new text')).toBeTruthy();
  });

  it('sets multiline and autoGrow to true in native input if multiline prop is true', () => {
    const wrapper = shallow(<TextInput
      {...props}
      multiline
    />);

    const nativeInput = wrapper.find(NativeTextInput);

    nativeInput.props().onChangeText('new text');

    expect(nativeInput.props().multiline).toBeTruthy();
    expect(nativeInput.props().autoGrow).toBeTruthy();
  });
});
