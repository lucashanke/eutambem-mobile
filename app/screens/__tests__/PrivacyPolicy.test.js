import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import PrivacyPolicy from '../PrivacyPolicy';

describe('PrivacyPolicy', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PrivacyPolicy />);
    expect(wrapper).toMatchSnapshot();
  });
});
