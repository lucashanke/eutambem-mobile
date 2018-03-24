import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import appStyles from '../styles';
import Picker from '../components/common/Picker';
import DatePicker from '../components/common/DatePicker';
import PlacePicker from '../components/common/PlacePicker';

import SectionHeader from './common/SectionHeader';

const MAX_TEXT_INPUT_LENGTH = 350;

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
          items={[{
            value: 'physical',
            label: 'Assédio Físico',
          }, {
            value: 'verbal',
            label: 'Assédio Verbal',
          }, {
            value: 'homophobia',
            label: 'Homofobia',
          }, {
            value: 'racism',
            label: 'Racismo',
          }, {
            value: 'transfobia',
            label: 'Transfobia',
          }, {
            value: 'other',
            label: 'Outro tipo de Assédio',
          }]}
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
          items={[{
            value: 'yes',
            label: 'Sim',
          }, {
            value: 'no',
            label: 'Não',
          }, {
            value: 'notInformed',
            label: 'Prefiro não responder',
          }]}
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
          items={[{
            value: 'woman',
            label: 'Mulher',
          }, {
            value: 'man',
            label: 'Homem',
          }, {
            value: 'nonbinary',
            label: 'Não binário',
          }]}
        />
        <Picker
          placeholder="Cor"
          items={[{
            value: 'black',
            label: 'Negra',
          }, {
            value: 'white',
            label: 'Branca',
          }, {
            value: 'brown',
            label: 'Parda',
          }, {
            value: 'asian',
            label: 'Amarela',
          }, {
            value: 'indian',
            label: 'Indígena',
          }, {
            value: 'notInformed',
            label: 'Prefiro não dizer',
          }]}
        />
        <Picker
          placeholder="Idade"
          items={[{
            value: 'lessThan18',
            label: 'Menor de 18 anos',
          }, {
            value: 'between18and25',
            label: 'Entre 18 e 25 anos',
          }, {
            value: 'between26and35',
            label: 'Entre 26 e 35 anos',
          }, {
            value: 'between36and50',
            label: 'Entre 36 e 50 anos',
          }, {
            value: 'between51and65',
            label: 'Entre 51 e 65 anos',
          }, {
            value: 'over65',
            label: 'Maior de 65 anos',
          }]}
        />
        <Picker
          placeholder="Renda Aproximada"
          items={[{
            value: 'belowOne',
            label: 'Até R$724,00',
          }, {
            value: 'fromOneToThree',
            label: 'De R$724,01 a R$2.172,00',
          }, {
            value: 'fromThreeToFive',
            label: 'De R$2.172,01 a R$3.620,00',
          }, {
            value: 'fromFiveToTen',
            label: 'De R$3.620,01 a R$7.240,00',
          }, {
            value: 'fromTenToTwenty',
            label: 'De R$7.240,01 a R$14.480,00',
          }, {
            value: 'overTwenty',
            label: 'Mais de R$14.480,01',
          }]}
        />
      </View>
    );
  }
}
