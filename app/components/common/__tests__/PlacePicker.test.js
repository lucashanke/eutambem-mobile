import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import PlacePicker from '../PlacePicker';

const props = {
  types: ['establishment'],
  onPlaceChange: sinon.spy(),
};

describe('PlacePicker', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PlacePicker {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
