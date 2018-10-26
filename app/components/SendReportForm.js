import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { sendReport } from '../services/reportService';
import Report from './Report';
import { Button } from './common';

import { loading, formWrapper } from './hoc';

const Result = loading(() => <Text>Relato Enviado!</Text>);

export class SendReportForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      preview: true,
      report: props.navigation.getParam('formData', {}),
      response: null,
    };
  }

  submit() {
    const { report } = this.state;
    console.log('Sending report:', report);
    this.setState({ preview: false });
    sendReport(report).then((response) => {
      this.setState({
        response,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const preview = (
      <View>
        <Report data={this.state.report} options={this.props.data.formOptions}/>
        <Button
          testID="send-button"
          onPress={() => this.submit()}
          title="Enviar Relato"
        />
      </View>
    );

    const result = (<Result data={this.state.response}/>);

    return this.state.preview ? preview : result;
  }
}

const valueLabelShape = PropTypes.arrayOf(PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string,
})).isRequired;

SendReportForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    formOptions: PropTypes.shape({
      harassment_type_options: valueLabelShape,
      followup_actions_options: valueLabelShape,
      yes_no_optional_options: valueLabelShape,
      skin_color_options: valueLabelShape,
      age_options: valueLabelShape,
      wage_options: valueLabelShape,
      gender_options: valueLabelShape,
      sexual_orientation: valueLabelShape,
    }).isRequired,
  }).isRequired,
};

export default formWrapper(loading(SendReportForm));
