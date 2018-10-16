import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import SectionHeader from '../SectionHeader';
import { Text } from 'react-native';

const props = {
  title: 'Test SectionHeader',
};

describe('SectionHeader', () => {
  it('renders Text with title in uppercase', () => {
    const wrapper = shallow(<SectionHeader {...props} />);
    
    expect(wrapper.find(Text).children().text()).toEqual(props.title.toUpperCase());
  });
});
