import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import appStyles from '../styles';

import { Picker, DatePicker, PlacePicker, TextInput, SectionHeader, SectionText, CheckBoxGroup } from './common';

import { HARASSMENT_TYPE_OPTIONS,
  YES_NO_OPTIONAL_OPTIONS,
  GENDER_OPTIONS,
  SKIN_COLOR_OPTIONS,
  AGE_OPTIONS,
  WAGE_OPTIONS,
  MAX_TEXT_INPUT_LENGTH,
  FOLLOWUP_ACTIONS_OPTIONS } from '../constants';
import CheckBox from './common/CheckBox';

export default class CreateReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      description: '',
      advice: '',
      email: '',
      name: '',
      acceptedPolicies: false,
    };
  }

  render() {
    return (
      <View>
        <SectionHeader title="Sobre o que aconteceu" />
        <PlacePicker
          placeholder="Empresa em que ocorreu"
          types={['establishment']}
        />
        <PlacePicker
          placeholder="Endereço do ocorrido"
          types={['address']}
        />
        <Picker
          placeholder="Tipo de assédio"
          items={HARASSMENT_TYPE_OPTIONS}
        />
        <TextInput
          multiline
          placeholder="Conte-nos mais sobre o ocorrido"
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
        />
        <DatePicker
          date={this.state.date}
          placeholder="Quando ocorreu"
          maxDate={new Date(Date.now())}
          onDateChange={date => this.setState({ date })}
        />
        <CheckBoxGroup
          label="Você tomou alguma providência com relação ao ocorrido?"
          options={FOLLOWUP_ACTIONS_OPTIONS}
        />
        <Picker
          placeholder="Você recomendaria essa empresa depois do ocorrido?"
          items={YES_NO_OPTIONAL_OPTIONS}
        />
        <TextInput
          style={[appStyles.input, appStyles.multilineInput]}
          multiline
          autoGrow
          maxLength={MAX_TEXT_INPUT_LENGTH}
          placeholder="Qual seu conselho para os gestores?"
          onChangeText={advice => this.setState({ advice })}
          value={this.state.advice}
        />
        <SectionHeader title="Sobre você" />
        <Picker
          placeholder="Gênero"
          items={GENDER_OPTIONS}
        />
        <Picker
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

CreateReportForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
