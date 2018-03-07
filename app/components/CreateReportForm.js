import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import appStyles from '../styles';
import Picker from '../components/common/Picker';
import DatePicker from '../components/common/DatePicker';
import PlacePicker from '../components/common/PlacePicker';

import SectionHeader from './common/SectionHeader';

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
            value: 'fisico',
            label: 'Assédio Físico',
          }, {
            value: 'verbal',
            label: 'Assédio Verbal',
          }, {
            value: 'homofobia',
            label: 'Homofobia',
          }, {
            value: 'racismo',
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
          placeholder="Você recomendaria essa empresa depois do ocorrido"
          items={[{
            value: 'sim',
            label: 'Sim',
          }, {
            value: 'nao',
            label: 'Não',
          }]}
        />
        <TextInput
          style={[appStyles.input, appStyles.multilineInput]}
          multiline
          autoGrow
          placeholder="Qual seu conselho para os gest"
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
            value: 'negra',
            label: 'Negra',
          }, {
            value: 'branca',
            label: 'Branca',
          }, {
            value: 'parda',
            label: 'Parda',
          }, {
            value: 'amarela',
            label: 'Amarela',
          }, {
            value: 'indigena',
            label: 'Indígena',
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
            value: 'over66',
            label: 'Maior de 66 anos',
          }]}
        />
        <Picker
          placeholder="Renda Aproximada"
          items={[{
            value: 'ateUm',
            label: 'Até R$724,00',
          }, {
            value: 'deUmATres',
            label: 'De R$724,01 a R$2.172,00',
          }, {
            value: 'deTresACinco',
            label: 'De R$2.172,01 a R$3.620,00',
          }, {
            value: 'deCincoADez',
            label: 'De R$3.620,01 a R$7.240,00',
          }, {
            value: 'deDezAVinte',
            label: 'De R$7.240,01 a R$14.480,00',
          }, {
            value: 'maisDeVinte',
            label: 'Mais de R$14.480,01',
          }]}
        />
      </View>
    );
  }
}
