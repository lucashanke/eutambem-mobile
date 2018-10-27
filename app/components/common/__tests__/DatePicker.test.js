import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ExternalDatePicker from 'react-native-datepicker';

import { DatePicker } from '../DatePicker';

const props = {
  onValueChange: () => {},
  value: '16/Oct/2018',
};

describe('DatePicker', () => {
  it('renders external datepicker component', () => {
    const wrapper = shallow(<DatePicker {...props} />);

    expect(wrapper.find(ExternalDatePicker)).toHaveLength(1);
  });

  it('renders passes value prop to external component date prop', () => {
    const wrapper = shallow(<DatePicker {...props} />);

    expect(wrapper.find(ExternalDatePicker).props().date).toEqual('16/Oct/2018');
  });

  it('calls onValueChange prop when date changes on external component', () => {
    const onValueChange = sinon.spy();
    const wrapper = shallow(<DatePicker
      {...props}
      onValueChange={onValueChange}
    />);

    wrapper
      .find(ExternalDatePicker)
      .props()
      .onDateChange('17/Oct/2018');

    expect(onValueChange.calledWith('17/Oct/2018')).toBeTruthy();
  });
});
