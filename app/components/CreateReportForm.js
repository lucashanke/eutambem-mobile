import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';

import appStyles from '../styles';

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
          mode="date"
          placeholder="Quando ocorreu"
          format="DD/MMM/YYYY"
          maxDate={new Date(Date.now())}
          confirmBtnText="Ok"
          cancelBtnText="Cancelar"
          showIcon={false}
          onDateChange={date => this.setState({ date })}
          style={appStyles.date}
          customStyles={{ dateInput: appStyles.input }}
        />
      </View>
    );
  }
}
