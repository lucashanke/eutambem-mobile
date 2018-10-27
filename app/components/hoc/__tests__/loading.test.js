import React from 'react';
import { shallow } from 'enzyme';
import { ActivityIndicator, Text } from 'react-native';

import loading from '../loading';

const WrappedComponent = () => <Text>WrappedComponent</Text>;
const Loading = loading(WrappedComponent);

describe('loading', () => {
  it('renders ActivityIndicator when data prop is not defined', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find(WrappedComponent)).toHaveLength(0);
    expect(wrapper.find(ActivityIndicator)).toHaveLength(1);
  });

  it('renders WrappedComponent when data prop is defined', () => {
    const wrapper = shallow(<Loading data="test-data" />);
    expect(wrapper.find(WrappedComponent)).toHaveLength(1);
    expect(wrapper.find(ActivityIndicator)).toHaveLength(0);
  });
});
