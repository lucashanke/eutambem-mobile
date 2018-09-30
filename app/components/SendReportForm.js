import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { sendReport } from '../services/reportService';
import Report from './Report';

export class SendReportForm extends Component {
  state = {
    response: null,
  }

  componentDidMount() {
    const report = this.props.navigation.getParam('formData', {});
    console.log('Sending report:', report);
    sendReport(report).then((response) => {
      this.setState({
        response,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View>
        <Report data={this.state.response} />
      </View>
    );
  }
}

SendReportForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};

export default SendReportForm;
