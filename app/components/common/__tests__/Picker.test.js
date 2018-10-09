import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import { Picker } from '../Picker';
import Modal from 'react-native-modal';

const props = {
  placeholder: 'Test Picker',
  items: [{
    value: '1',
    label: 'Label 1',
  }, {
    value: '2',
    label: 'Label 2',
  }],
  onValueChange: () => {},
};

describe('Picker', () => {
  it('renders TextInput', () => {
    const wrapper = shallow(<Picker {...props} />);

    expect(wrapper.find('TextInput')).toHaveLength(1);
  });

  it('renders invisible modal at first', () => {
    const wrapper = shallow(<Picker {...props} />);

    const modal = wrapper.find(Modal);

    expect(modal).toHaveLength(1);
    expect(modal.props().isVisible).toBeFalsy();
  });

  describe('openModal', () => {
    it('renders visible modal when called', () => {
      const wrapper = shallow(<Picker {...props} />);

      wrapper.instance().openModal();
      const modal = wrapper.find(Modal);

      expect(modal).toHaveLength(1);
      expect(modal.props().isVisible).toBeTruthy();
    });
  })
});
