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
      email: '',
      name: '',
      acceptedPolicies: false,
    };
  }

  render() {
    return (
      <View>
        <Picker
          required
          placeholder="Gênero"
          items={this.props.data.formOptions.gender_options}
        />
        <Picker
          required
          placeholder="Cor"
          items={this.props.data.formOptions.skin_color_options}
        />
        <Picker
          placeholder="Idade"
          items={this.props.data.formOptions.age_options}
        />
        <Picker
          placeholder="Renda Aproximada"
          items={this.props.data.formOptions.wage_options}
        />
        <SectionHeader title="Saiba mais" />
        <SectionText title="Acompanhe relatos da mesma empresa ou cidade." />
        <TextInput
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder="Nome"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <CheckBox
          onClick={() => this.setState({ acceptedPolicies: !this.state.acceptedPolicies })}
          isChecked={this.state.acceptedPolicies}
          label="Ao registrar esse relato eu concordo com a Política de Privacidade do Eu Também."
        />
        <Text style={appStyles.link} onPress={() => this.props.navigation.navigate('PrivacyPolicy')}>
          Acessar Política de Privacidade
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('SendReport')}
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
  }).isRequired,
  data: PropTypes.shape({
    formOptions: PropTypes.shape({
      gender_options: valueLabelShape,
      followup_actions_options: valueLabelShape,
      yes_no_optional_options: valueLabelShape,
    }).isRequired,
  }).isRequired,
};

export default formWrapper(loading(AboutYouForm));