import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import Container from '../components/common/Container';

const SendReport = props => (
  <Container>
    <Text>
      Report enviado!
    </Text>
  </Container>
);

SendReport.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SendReport;
