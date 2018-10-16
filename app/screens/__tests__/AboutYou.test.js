import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AboutYou from '../AboutYou';
import AboutYouForm from '../../components/AboutYouForm';

const props = {
  navigation: {
    navigate: sinon.spy(),
  },
};

describe('AboutYou', () => {
  it('renders AboutYouForm', () => {
    const wrapper = shallow(<AboutYou {...props} />);
    expect(wrapper.find(AboutYouForm)).toHaveLength(1);
  });
});
