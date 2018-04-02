import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import CheckBoxGroup from '../CheckBoxGroup';

const props = {
  label: 'Test CheckBoxGroup',
  options: [{
    key: '1',
    label: 'Label 1',
  }, {
    key: '2',
    label: 'Label 2',
  }],
};

describe('CheckBoxGroup', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CheckBoxGroup {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
