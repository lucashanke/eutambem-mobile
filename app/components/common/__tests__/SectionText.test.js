import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import SectionText from '../SectionText';
import { Text } from 'react-native';

const props = {
  title: 'Test SectionText',
};

describe('SectionText', () => {
  it('renders Text with title', () => {
    const wrapper = shallow(<SectionText {...props} />);
    
    expect(wrapper.find(Text).children().text()).toEqual(props.title);
  });
});
