import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import appStyles, { RED } from '../styles';

import { Button, Picker, DatePicker, TextInput, CheckBoxGroup, PlaceInput } from './common';

import { MAX_TEXT_INPUT_LENGTH } from '../constants';

import { formWrapper, loading } from './hoc';

export class AboutWhatHappenedForm extends Component {
  state = {
    formData: {
      establishment: { value: {}, valid: false },
      harassmentType: { value: '', valid: false },
      description: { value: '', valid: false },
      date: { value: null, valid: false },
      followupActions: { value: [], valid: true },
      wouldRecommend: { value: '', valid: false },
      advice: { value: '', valid: true },
    },
    containErrors: false,
  };

  getFormDataValues = () => {
    const formDataValues = {};
    Object.keys(this.state.formData).forEach((key) => {
      formDataValues[key] = this.state.formData[key].value;
    });
    return formDataValues;
  };

  updateFormDataValue = (key, value, valid) => {
    const { formData } = this.state;
    if (key in formData) {
      formData[key] = { value, valid };
      this.setState({ formData });
    } else {
      console.error('Trying to update key that is not present in formData.');
    }
  };

  isValid = () => Object.values(this.state.formData).every(datum => datum.valid);

  submit = () => {
    if (this.isValid()) {
      this.setState({ containErrors: false });
      this.props.navigation.navigate('AboutYou', { formData: this.getFormDataValues() });
    } else {
      this.setState({ containErrors: true });
    }
  };

  render() {
    const validationMessage = (
      <Text style={{ color: RED }}>
        Sentimos falta de algumas informações obrigatórias. Por favor, preencha-as e tente
        novamente.
      </Text>
    );

    return (
      <View>
        <PlaceInput
          required
          testID="establishment-input"
          placeholder="Empresa em que ocorreu"
          showValidation={this.state.containErrors}
          value={this.state.formData.establishment.value.label}
          onValueChange={(item, valid) =>
            this.updateFormDataValue('establishment', { value: item.id, label: item.label }, valid)
          }
          types={['establishment']}
          navigation={this.props.navigation}
          placeScreenTitle="Informe a Empresa"
        />
        <Picker
          required
          testID="harassment-input"
          placeholder="Tipo de assédio"
          showValidation={this.state.containErrors}
          value={this.state.formData.harassmentType.value}
          onValueChange={(value, valid) => this.updateFormDataValue('harassmentType', value, valid)}
          items={this.props.data.formOptions.harassment_type_options}
        />
        <TextInput
          required
          multiline
          testID="description-input"
          placeholder="Conte-nos mais sobre o ocorrido"
          showValidation={this.state.containErrors}
          onValueChange={(value, valid) => this.updateFormDataValue('description', value, valid)}
          value={this.state.formData.description.value}
        />
        <DatePicker
          required
          testID="date-input"
          showValidation={this.state.containErrors}
          value={this.state.formData.date.value}
          placeholder="Quando ocorreu"
          maxDate={new Date(Date.now())}
          onValueChange={(date, valid) => this.updateFormDataValue('date', date, valid)}
        />
        <CheckBoxGroup
          testID="followup-input"
          showValidation={this.state.containErrors}
          values={this.state.formData.followupActions.value}
          label="Você tomou alguma providência com relação ao ocorrido?"
          onValueChange={(values, valid) =>
            this.updateFormDataValue('followupActions', values, valid)
          }
          options={this.props.data.formOptions.followup_actions_options}
        />
        <Picker
          required
          testID="would-recommend-input"
          showValidation={this.state.containErrors}
          value={this.state.formData.wouldRecommend.value}
          onValueChange={(value, valid) => this.updateFormDataValue('wouldRecommend', value, valid)}
          placeholder="Você recomendaria essa empresa depois do ocorrido?"
          items={this.props.data.formOptions.yes_no_optional_options}
        />
        <TextInput
          testID="advice-input"
          style={[appStyles.input, appStyles.multilineInput]}
          multiline
          autoGrow
          showValidation={this.state.containErrors}
          maxLength={MAX_TEXT_INPUT_LENGTH}
          placeholder="Qual seu conselho para os gestores?"
          onValueChange={(advice, valid) => this.updateFormDataValue('advice', advice, valid)}
          value={this.state.formData.advice.value}
        />
        {this.state.containErrors ? validationMessage : null}
        <Button
          testID="next-button"
          onPress={() => this.submit()}
          title="Prosseguir"
        />
      </View>
    );
  }
}

const valueLabelShape = PropTypes.arrayOf(PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string,
})).isRequired;

AboutWhatHappenedForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    formOptions: PropTypes.shape({
      harassment_type_options: valueLabelShape,
      followup_actions_options: valueLabelShape,
      yes_no_optional_options: valueLabelShape,
    }).isRequired,
  }).isRequired,
};

export default formWrapper(loading(AboutWhatHappenedForm));
