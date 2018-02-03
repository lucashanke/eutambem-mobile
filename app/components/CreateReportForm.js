import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import appStyles from '../styles';
import Picker from '../components/common/Picker';
import DatePicker from '../components/common/DatePicker';

export default class CreateReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      date: null,
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={appStyles.input}
          placeholder="Local do assédio"
          onChangeText={company => this.setState({ company })}
          value={this.state.company}
        />
        <DatePicker
          date={this.state.date}
          placeholder="Quando ocorreu"
          maxDate={new Date(Date.now())}
          onDateChange={date => this.setState({ date })}
        />
        <Picker
          placeholder="O que aconteceu"
          items={[{
            value: 'moral',
            label: 'Assédio Moral',
          }, {
            value: 'sexual',
            label: 'Assédio Sexual',
          }, {
            value: 'other',
            label: 'Outro tipo de Assédio',
          }]}
        />
      </View>
    );
  }
}
