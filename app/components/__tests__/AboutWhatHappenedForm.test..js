import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { AboutWhatHappenedForm } from '../AboutWhatHappenedForm';

const props = {
  navigation: {
    navigate: sinon.spy(),
  },
};

describe('AboutWhatHappenedForm', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutWhatHappenedForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
