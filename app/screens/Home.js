import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/common/Container';
import Button from '../components/common/Button';

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
