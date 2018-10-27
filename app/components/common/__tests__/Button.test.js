import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ExternalButton from 'react-native-button';

import Button from '../Button';

const props = {
  title: 'Test Button',
  onPress: sinon.spy(),
};

describe('Button', () => {
  it('renders external button component - react-native-button', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find(ExternalButton)).toHaveLength(1);
  });

  it('renders title prop as child of external button component', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper
      .find(ExternalButton)
      .children()
      .text()).toEqual('Test Button');
  });

  it('press event o external component button calls on press prop function', () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.find(ExternalButton).simulate('press');
    expect(props.onPress.callCount).toEqual(1);
  });
});
