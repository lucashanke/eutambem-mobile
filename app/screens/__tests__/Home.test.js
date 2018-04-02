import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

const props = {
  navigation: {
    navigate: () => {},
  },
};

describe('Home', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
