import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import appStyles from '../styles';

import { CheckBox, Picker, TextInput, SectionHeader, SectionText } from './common';
import { formWrapper, loading } from './hoc';

import {
  GENDER_OPTIONS,
  SKIN_COLOR_OPTIONS,
  AGE_OPTIONS,
  WAGE_OPTIONS,
} from '../constants';

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
          items={GENDER_OPTIONS}
        />
        <Picker
          required
          placeholder="Cor"
          items={SKIN_COLOR_OPTIONS}
        />
        <Picker
          placeholder="Idade"
          items={AGE_OPTIONS}
        />
        <Picker
          placeholder="Renda Aproximada"
          items={WAGE_OPTIONS}
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
      </View>
    );
  }
}

AboutYouForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default formWrapper(loading(AboutYouForm));