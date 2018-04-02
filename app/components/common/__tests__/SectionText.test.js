import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import SectionText from '../SectionText';

const props = {
  title: 'Test SectionText',
};

describe('SectionText', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SectionText {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
