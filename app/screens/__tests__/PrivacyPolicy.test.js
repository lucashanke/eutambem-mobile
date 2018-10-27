import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';

import PrivacyPolicy from '../PrivacyPolicy';

describe('PrivacyPolicy', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PrivacyPolicy />);
    expect(wrapper.find(Text)).toHaveLength(1);
  });
});
