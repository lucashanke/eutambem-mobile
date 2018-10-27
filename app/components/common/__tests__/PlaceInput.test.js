import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { PlaceInput } from '../PlaceInput';

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
  it('renders a TextInput', () => {
    const wrapper = shallow(<PlaceInput {...props} />);
    expect(wrapper.find('TextInput')).toHaveLength(1);
  });

  it('focus of the TextInput calls the navigate method to the PlacePicker screen', () => {
    const wrapper = shallow(<PlaceInput {...props} />);

    wrapper.find('TextInput').simulate('focus');

    expect(props.navigation.navigate.calledWith('PlaceScreen')).toBeTruthy();
  });

  it('navigation passes onPlaceChange function that calls onValueChange prop', () => {
    const wrapper = shallow(<PlaceInput {...props} />);

    const { onPlaceChange } = wrapper.props().navigation.navigate.args[0][1];
    onPlaceChange({ id: 'testPlace', label: 'place for testing' });

    expect(props.onValueChange.callCount).toEqual(1);
    expect(props.onValueChange.calledWith({
      id: 'testPlace',
      label: 'place for testing',
    })).toBeTruthy();
    expect(props.navigation.goBack.callCount).toEqual(1);
  });
});
