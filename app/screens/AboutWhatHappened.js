import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/common/Container';
import Button from '../components/common/Button';
import AboutWhatHappenedForm from '../components/AboutWhatHappenedForm';

const AboutWhatHappened = props => (
  <Container>
    <AboutWhatHappenedForm navigation={props.navigation} />
  </Container>
);

AboutWhatHappened.navigationOptions = ({ navigation }) => ({
  headerTitle: 'O que aconteceu',
  headerLeft: <Button
    type="cancel"
    title="Cancelar"
    onPress={() => navigation.goBack(null)}
  />,
});

AboutWhatHappened.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default AboutWhatHappened;
