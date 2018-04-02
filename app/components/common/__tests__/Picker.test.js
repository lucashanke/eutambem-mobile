import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import Picker from '../Picker';

const props = {
  placeholder: 'Test Picker',
  items: [{
    value: '1',
    label: 'Label 1',
  }, {
    value: '2',
    label: 'Label 2',
  }],
};

describe('Picker', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Picker {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
