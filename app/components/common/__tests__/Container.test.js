import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import Container from '../Container';

describe('Container', () => {
  it('renders correctly', () => {
    const component = (
      <Container>
        <Text>Testing Container</Text>
      </Container>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
