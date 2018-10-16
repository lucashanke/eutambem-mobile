import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import SendReport from '../SendReport';

const props = {
  navigation: {
    navigate: () => {},
  },
};

describe('SendReport', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SendReport {...props} />);
    expect(wrapper.find('SendReportForm')).toHaveLength(1);
  });
});
