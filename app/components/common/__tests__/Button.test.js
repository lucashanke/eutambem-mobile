import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from '../Button';

const props = {
  title: 'Test Button',
  onPress: sinon.spy(),
};

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
