import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

import Container from '../components/Container';

const Home = props => (
  <Container>
    <Button
      onPress={() => props.navigation.navigate('CreateReport')}
      title="Criar Relato"
    />
  </Container>
);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
