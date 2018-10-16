import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import PlaceScreen from '../PlaceScreen';

const props = {
  navigation: {
    navigate: sinon.spy(),
    state: {
      params: {
        types: ['establishment'],
        onPlaceChange: sinon.spy(),
      },
    },
  },
};

describe('PlaceScreen', () => {
  it('renders PlacePicker', () => {
    const wrapper = shallow(<PlaceScreen {...props} />);
    expect(wrapper.find('PlacePicker')).toHaveLength(1);
  });
});
