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
  afterEach(() => {
    props.onValueChange.resetHistory();
  });

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

  it('does not add Optional label if required is true', () => {
    const wrapper = shallow(<TextInput {...props} required/>);

    expect(wrapper.find(NativeTextInput).props().placeholder.trim()).toEqual('Test TextInput');
  });

  it('adds Optional label if required is false', () => {
    const wrapper = shallow(<TextInput {...props} />);

    expect(wrapper.find(NativeTextInput).props().placeholder).toEqual('Test TextInput (Opcional)');
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

  describe('format prop', () => {
    describe('none', () => {
      it('onChangeText of native TextInput calls onValueChange with valid set to true', () => {
        const wrapper = shallow(<TextInput {...props} />);

        wrapper
          .find(NativeTextInput)
          .props()
          .onChangeText('new text');

        expect(props.onValueChange.calledWith('new text', true)).toBeTruthy();
      });
    });

    describe('email', () => {
      it('onChangeText of native TextInput calls onValueChange with valid set to false when text is not an email', () => {
        const wrapper = shallow(<TextInput format="email" {...props} />);

        wrapper
          .find(NativeTextInput)
          .props()
          .onChangeText('new text');

        expect(props.onValueChange.calledWith('new text', false)).toBeTruthy();
      });

      it('onChangeText of native TextInput calls onValueChange with valid set to true when text is an email', () => {
        const wrapper = shallow(<TextInput format="email" {...props} />);

        wrapper
          .find(NativeTextInput)
          .props()
          .onChangeText('elenao@elenunca.com');

        expect(props.onValueChange.calledWith('elenao@elenunca.com', true)).toBeTruthy();
      });
    });
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
