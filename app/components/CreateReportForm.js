import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import appStyles from '../styles';
import Picker from '../components/common/Picker';
import DatePicker from '../components/common/DatePicker';
import PlacePicker from '../components/common/PlacePicker';

import SectionHeader from './common/SectionHeader';
import { HARASSMENT_TYPE_OPTIONS,
  YES_NO_OPTIONAL_OPTIONS,
  GENDER_OPTIONS,
  SKIN_COLOR_OPTIONS,
  AGE_OPTIONS,
  WAGE_OPTIONS,
  MAX_TEXT_INPUT_LENGTH } from '../constants';

export default class CreateReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      description: '',
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
          style={[appStyles.input, appStyles.multilineInput]}
          multiline
          autoGrow
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
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
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
      </View>
    );
  }
}
