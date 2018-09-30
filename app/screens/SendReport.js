import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Container } from '../components/common';
import SendReportForm from '../components/SendReportForm';

class SendReport extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Relato',
    headerLeft: null,
    headerRight: <Button title="Fechar" onPress={() => navigation.navigate('Home')} />,
  })

  render() {
    return (
      <Container>
        <SendReportForm navigation={this.props.navigation} />
      </Container>
    );
  }
}

SendReport.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

export default SendReport;
