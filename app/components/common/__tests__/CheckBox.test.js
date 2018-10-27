import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ExternalCheckBox from 'react-native-check-box';

import { CheckBox } from '../CheckBox';

const props = {
  label: 'Test CheckBox',
  onValueChange: sinon.spy(),
  value: true,
};

describe('CheckBox', () => {
  it('renders external checkbox component', () => {
    const wrapper = shallow(<CheckBox {...props} />);
    expect(wrapper.find(ExternalCheckBox)).toHaveLength(1);
  });

  it('renders title as rightText on external checkbox component', () => {
    const wrapper = shallow(<CheckBox {...props} />);
    const checkbox = wrapper.find(ExternalCheckBox);
    expect(checkbox.props().rightText).toEqual('Test CheckBox');
  });

  it('passes down value to the external checkbox component as isChecked', () => {
    const wrapper = shallow(<CheckBox {...props} />);
    const checkbox = wrapper.find(ExternalCheckBox);
    expect(checkbox.props().isChecked).toEqual(true);
  });

  it('calls onValueChange when external checkbox component is clicked', () => {
    const wrapper = shallow(<CheckBox {...props} />);
    wrapper.find(ExternalCheckBox).simulate('click');
    expect(props.onValueChange.callCount).toEqual(1);
  });
});
