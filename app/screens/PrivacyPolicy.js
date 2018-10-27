import React from 'react';
import { Text } from 'react-native';

import Container from '../components/common/Container';

const PrivacyPolicy = () => (
  <Container>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus luctus nulla vel
      hendrerit. Phasellus consequat viverra odio, quis convallis felis pharetra sit amet. Donec
      feugiat neque faucibus, porta eros a, efficitur enim. Morbi scelerisque maximus dui, rhoncus
      rutrum urna molestie vitae. Sed metus orci, pharetra nec lacinia eu, dictum a ante. Aenean vel
      elit sit amet est eleifend bibendum quis tortor. Curabitur quam augue, ultrices in
      sollicitudin vitae, efficitur sit amet tortor. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia Curae; Donec in eros id diam rhoncus venenatis. Cras non
      leo id leo ullamcorper aliquet. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos. Curabitur ultricies massa nec dictum cursus. Nullam interdum
      leo dolor. Aliquam sit amet nibh commodo, vulputate dolor quis, faucibus mi. Quisque mattis
      nibh felis, sit amet mollis velit congue at. Duis dapibus neque nunc, a dignissim quam aliquet
      eu. Vivamus ultrices, nunc ac fringilla facilisis, velit nibh dignissim sem, ac lacinia turpis
      nibh in orci.
    </Text>
  </Container>
);

PrivacyPolicy.navigationOptions = {
  headerTitle: 'Política de Privacidade',
};

export default PrivacyPolicy;
