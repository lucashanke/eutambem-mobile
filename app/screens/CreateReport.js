import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/common/Container';
import CreateReportForm from '../components/CreateReportForm';

const CreateReport = props => (
  <Container>
    <CreateReportForm navigation={props.navigation} />
  </Container>
);

CreateReport.navigationOptions = {
  headerTitle: 'Criar Relato',
};

CreateReport.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default CreateReport;
