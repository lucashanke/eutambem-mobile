import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import SectionHeader from '../SectionHeader';

const props = {
  title: 'Test SectionHeader',
};

describe('SectionHeader', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SectionHeader {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
