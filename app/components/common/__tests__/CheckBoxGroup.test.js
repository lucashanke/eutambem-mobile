import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { CheckBoxGroup } from '../CheckBoxGroup';

const props = {
  label: 'Test CheckBoxGroup',
  options: [{
    value: '1',
    label: 'Label 1',
  }, {
    value: '2',
    label: 'Label 2',
  }],
  values: ['2'],
  onValueChange: () => {},
};

describe('CheckBoxGroup', () => {
  it('renders a checkbox component for each option passed', () => {
    const wrapper = shallow(<CheckBoxGroup {...props} />);

    expect(wrapper.find('CheckBox')).toHaveLength(2);
  });

  it('renders a checkbox as marked if values prop contains its value', () => {
    const wrapper = shallow(<CheckBoxGroup {...props} />);
    const markedCheckBox = wrapper.find({ value: true });
    
    expect(markedCheckBox).toHaveLength(1);
    expect(markedCheckBox.props().label).toEqual('Label 2');
  });

  it('when an unmarked option changes, onValueChange prop is called with the selected values', () => {
    const onValueChange = sinon.spy();
    const wrapper = shallow(<CheckBoxGroup {...props} onValueChange={onValueChange}/>);

    const unmarkedCheckBox = wrapper.find({ value: false, label: 'Label 1' });
    unmarkedCheckBox.props().onValueChange(); 

    expect(onValueChange.callCount).toEqual(1);
    expect(onValueChange.calledWith(['2', '1'])).toBeTruthy();
  });

  it('when an unmarked option changes, onValueChange prop is called with the selected values', () => {
    const onValueChange = sinon.spy();
    const wrapper = shallow(<CheckBoxGroup {...props} onValueChange={onValueChange}/>);

    const unmarkedCheckBox = wrapper.find({ value: true, label: 'Label 2' });
    unmarkedCheckBox.props().onValueChange(); 

    expect(onValueChange.callCount).toEqual(1);
    expect(onValueChange.calledWith([])).toBeTruthy();
  });
});
