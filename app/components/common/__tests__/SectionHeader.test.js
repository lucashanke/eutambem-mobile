import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';

import SectionHeader from '../SectionHeader';

const props = {
  title: 'Test SectionHeader',
};

describe('SectionHeader', () => {
  it('renders Text with title in uppercase', () => {
    const wrapper = shallow(<SectionHeader {...props} />);

    expect(wrapper
      .find(Text)
      .children()
      .text()).toEqual(props.title.toUpperCase());
  });
});
