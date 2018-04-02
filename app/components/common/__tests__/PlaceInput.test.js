import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import PlaceInput from '../PlaceInput';

const props = {
  placeScreenTitle: 'Inform the place',
  types: ['establishment'],
  onValueChange: sinon.spy(),
  navigation: {
    navigate: sinon.spy(),
    goBack: sinon.spy(),
  },
  placeholder: 'Place',
};

describe('PlaceInput', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PlaceInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
