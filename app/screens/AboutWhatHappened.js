import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/common/Container';
import AboutWhatHappenedForm from '../components/AboutWhatHappenedForm';

const AboutWhatHappened = props => (
  <Container>
    <AboutWhatHappenedForm navigation={props.navigation} />
  </Container>
);

AboutWhatHappened.navigationOptions = {
  headerTitle: 'Sobre o que aconteceu',
};

AboutWhatHappened.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default AboutWhatHappened;
