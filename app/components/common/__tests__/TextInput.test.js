import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '../TextInput';

const props = {
  placeholder: 'Test TextInput',
};

describe('TextInput', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
