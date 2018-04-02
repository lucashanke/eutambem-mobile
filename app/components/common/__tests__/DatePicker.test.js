import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import DatePicker from '../DatePicker';

describe('DatePicker', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DatePicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
