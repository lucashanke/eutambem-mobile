import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AboutWhatHappened from '../AboutWhatHappened';

const props = {
  navigation: {
    navigate: sinon.spy(),
  },
};

describe('AboutWhatHappened', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutWhatHappened {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
