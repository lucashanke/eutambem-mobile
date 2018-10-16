import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Home from '../Home';

const props = {
  navigation: {
    navigate: sinon.spy(),
  },
};

describe('Home', () => {
  it('renders button', () => {
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('button press goes to the create report stack', () => {
    const wrapper = shallow(<Home {...props} />);

    wrapper.find('Button').simulate('press');

    expect(props.navigation.navigate.calledWith('CreateReport')).toBeTruthy();
  });
});
