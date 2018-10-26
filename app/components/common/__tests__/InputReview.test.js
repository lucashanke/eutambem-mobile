import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import InputReview from '../InputReview';
import { Text } from 'react-native';

const props = {
  label: 'Test Label',
  value: 'Test Value',
};

describe('InputReview', () => {
  it('renders Text with label and value', () => {
    const wrapper = shallow(<InputReview {...props} />);

    const container = wrapper.find(Text).first();
    const label = container.children().find(Text).at(0);
    const value = container.children().find(Text).at(1);

    expect(label.children().first().text()).toEqual(`${props.label}`);
    expect(value.children().first().text()).toEqual(`${props.value}`);
  });
});
