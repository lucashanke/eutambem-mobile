import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';

import SectionText from '../SectionText';

const props = {
  title: 'Test SectionText',
};

describe('SectionText', () => {
  it('renders Text with title', () => {
    const wrapper = shallow(<SectionText {...props} />);

    expect(wrapper
      .find(Text)
      .children()
      .text()).toEqual(props.title);
  });
});
