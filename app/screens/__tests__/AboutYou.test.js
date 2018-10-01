import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AboutYou from '../AboutYou';

const props = {
  navigation: {
    navigate: sinon.spy(),
  },
};

describe('AboutYou', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutYou {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
