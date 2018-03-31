import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/common/Container';
import AboutYouForm from '../components/AboutYouForm';

const AboutYou = props => (
  <Container>
    <AboutYouForm navigation={props.navigation} />
  </Container>
);

AboutYou.navigationOptions = {
  headerTitle: 'Sobre você',
};

AboutYou.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default AboutYou;
