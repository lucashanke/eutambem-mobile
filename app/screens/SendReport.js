import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/common/Container';
import SendReportForm from '../components/SendReportForm';

const SendReport = props => (
  <Container>
    <SendReportForm navigation={props.navigation} />
  </Container>
);

SendReport.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SendReport;
