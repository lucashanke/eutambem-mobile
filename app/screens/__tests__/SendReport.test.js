import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import SendReport from '../SendReport';
import SendReportForm from '../../components/SendReportForm';

const props = {
  navigation: {
    navigate: () => {},
  },
};

describe('SendReport', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SendReport {...props} />);
    expect(wrapper.find(SendReportForm)).toHaveLength(1);
  });
});
