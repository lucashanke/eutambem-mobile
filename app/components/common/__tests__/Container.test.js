import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import Container from '../Container';

describe('Container', () => {
  it('renders a SafeAreaView, a KeyboardAvoidingView, a ScrollView and the children', () => {
    const component = (
      <Container>
        <Text>Testing Container</Text>
      </Container>
    );
    const wrapper = shallow(component);

    const view = wrapper.find('SafeAreaView KeyboardAvoidingView ScrollView');
    expect(view).toHaveLength(1);

    expect(view
      .find(Text)
      .children()
      .text()).toEqual('Testing Container');
  });
});
