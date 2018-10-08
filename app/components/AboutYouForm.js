import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import appStyles from '../styles';

import { Button, CheckBox, Picker, TextInput, SectionHeader, SectionText } from './common';
import { formWrapper, loading } from './hoc';

export class AboutYouForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        gender: { value: '', valid: false },
        skinColor: { value: '', valid: false },
        age: { value: '', valid: true },
        wage: { value: '', valid: true },
        email: { value: '', valid: false },
        name: { value: '', valid: true },
      },
      acceptedPolicies: false,
      containErrors: false,
    };
  }

  updateFormDataValue = (key, value, valid) => {
    const { formData } = this.state;
    if (key in formData) {
      formData[key] = { value, valid };
      this.setState({ formData });
    } else {
      console.error('Trying to update key that is not present in formData.');
    }
  };

  getThisFormDataValues = () => {
    const formDataValues = {};
    Object.keys(this.state.formData).forEach(key => { formDataValues[key] = this.state.formData[key].value; });
    return formDataValues;
  };

  formData = () => ({
    ...this.props.navigation.getParam('formData', {}),
    ...this.getThisFormDataValues(),
  });

  isValid = () => {
    return Object.values(this.state.formData).reduce((valid, currentData) => valid && currentData.valid, true);
  };

  submit = () => {
    if (this.isValid()) {
      this.setState({ containErrors: false });
      this.props.navigation.navigate('SendReport', { formData: this.formData() })
    } else {
      this.setState({ containErrors: true });
    }
  };

  render() {
    const validationMessage = (
      <Text>
        Existem campos obrigatórios não preenchidos. Por favor, preencha-os e tente novamente.
      </Text>
    );

    return (
      <View>
        <Picker
          required
          placeholder="Gênero"
          value={this.state.formData.gender.value}
          onValueChange={(value, valid) => this.updateFormDataValue('gender', value, valid)}
          items={this.props.data.formOptions.gender_options}
        />
        <Picker
          required
          placeholder="Cor"
          value={this.state.formData.skinColor.value}
          onValueChange={(value, valid) => this.updateFormDataValue('skinColor', value, valid)}
          items={this.props.data.formOptions.skin_color_options}
        />
        <Picker
          placeholder="Idade"
          value={this.state.formData.age.value}
          onValueChange={(value, valid) => this.updateFormDataValue('age', value, valid)}
          items={this.props.data.formOptions.age_options}
        />
        <Picker
          placeholder="Renda Aproximada"
          value={this.state.formData.wage.value}
          onValueChange={(value, valid) => this.updateFormDataValue('wage', value, valid)}
          items={this.props.data.formOptions.wage_options}
        />
        <SectionHeader title="Saiba mais" />
        <SectionText title="Acompanhe relatos da mesma empresa ou cidade." />
        <TextInput
          placeholder="Email"
          required
          onValueChange={(email, valid) => this.updateFormDataValue('email', email, valid)}
          value={this.state.formData.email.value}
        />
        <TextInput
          placeholder="Nome"
          onValueChange={(name, valid) => this.updateFormDataValue('name', name, valid)}
          value={this.state.formData.name.value}
        />
        <CheckBox
          onValueChange={() => this.setState({ acceptedPolicies: !this.state.acceptedPolicies })}
          value={this.state.acceptedPolicies}
          label="Ao registrar esse relato eu concordo com a Política de Privacidade do Eu Também."
        />
        <Text style={appStyles.link} onPress={() => this.props.navigation.navigate('PrivacyPolicy')}>
          Acessar Política de Privacidade
        </Text>
        { this.state.containErrors ? validationMessage: null }
        <Button
          onPress={() => this.submit()}
          title="Enviar Relato"
        />
      </View>
    );
  }
}

const valueLabelShape = PropTypes.arrayOf(PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string,
})).isRequired;

AboutYouForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    formOptions: PropTypes.shape({
      skin_color_options: valueLabelShape,
      age_options: valueLabelShape,
      wage_options: valueLabelShape,
      gender_options: valueLabelShape,
      followup_actions_options: valueLabelShape,
      yes_no_optional_options: valueLabelShape,
    }).isRequired,
  }).isRequired,
};

export default formWrapper(loading(AboutYouForm));
