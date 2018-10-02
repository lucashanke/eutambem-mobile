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
        gender: '',
        skinColor: '',
        age: '',
        wage: '',
        email: '',
        name: '',
        acceptedPolicies: false,
      },
    };
  }

  formData = () => ({
    ...this.props.navigation.getParam('formData', {}),
    ...this.state.formData,
  });

  updateFormDataValue = (key, value) => {
    const { formData } = this.state;
    if (key in formData) {
      formData[key] = value;
      this.setState({ formData });
    } else {
      console.error('Trying to update key that is not present in formData.');
    }
  }

  render() {
    return (
      <View>
        <Picker
          required
          placeholder="Gênero"
          onValueChange={value => this.updateFormDataValue('gender', value)}
          items={this.props.data.formOptions.gender_options}
        />
        <Picker
          required
          placeholder="Cor"
          onValueChange={value => this.updateFormDataValue('skinColor', value)}
          items={this.props.data.formOptions.skin_color_options}
        />
        <Picker
          placeholder="Idade"
          onValueChange={value => this.updateFormDataValue('age', value)}
          items={this.props.data.formOptions.age_options}
        />
        <Picker
          placeholder="Renda Aproximada"
          onValueChange={value => this.updateFormDataValue('wage', value)}
          items={this.props.data.formOptions.wage_options}
        />
        <SectionHeader title="Saiba mais" />
        <SectionText title="Acompanhe relatos da mesma empresa ou cidade." />
        <TextInput
          placeholder="Email"
          required
          onChangeText={email => this.updateFormDataValue('email', email)}
          value={this.state.formData.email}
        />
        <TextInput
          placeholder="Nome"
          onChangeText={name => this.updateFormDataValue('name', name)}
          value={this.state.formData.name}
        />
        <CheckBox
          onClick={() => this.updateFormDataValue('acceptedPolicies', !this.state.formData.acceptedPolicies)}
          isChecked={this.state.formData.acceptedPolicies}
          label="Ao registrar esse relato eu concordo com a Política de Privacidade do Eu Também."
        />
        <Text style={appStyles.link} onPress={() => this.props.navigation.navigate('PrivacyPolicy')}>
          Acessar Política de Privacidade
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('SendReport', { formData: this.formData() })}
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
