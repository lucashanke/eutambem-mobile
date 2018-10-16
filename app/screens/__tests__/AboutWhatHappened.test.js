import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AboutWhatHappened from '../AboutWhatHappened';
import AboutWhatHappenedForm from '../../components/AboutWhatHappenedForm';

const props = {
  navigation: {
    navigate: sinon.spy(),
  },
};

describe('AboutWhatHappened', () => {
  it('renders AboutWhatHappenedForm', () => {
    const wrapper = shallow(<AboutWhatHappened {...props} />);
    expect(wrapper.find(AboutWhatHappenedForm)).toHaveLength(1);
  });
});
