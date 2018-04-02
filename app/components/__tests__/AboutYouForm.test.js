import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AboutYouForm from '../AboutYouForm';

const props = {
  navigation: {
    navigate: sinon.spy(),
  },
};

describe('AboutYouForm', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutYouForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
