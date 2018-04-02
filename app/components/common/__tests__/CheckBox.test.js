import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CheckBox from '../CheckBox';

const props = {
  label: 'Test CheckBox',
  onClick: sinon.spy(),
};

describe('CheckBox', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CheckBox {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
