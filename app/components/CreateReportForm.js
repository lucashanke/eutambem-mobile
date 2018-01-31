import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import appStyles from '../styles';

export default class CreateReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
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
      </View>
    );
  }
}
