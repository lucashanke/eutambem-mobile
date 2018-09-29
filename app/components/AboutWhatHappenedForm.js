import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import appStyles from '../styles';

import { Button, Picker, DatePicker, TextInput, CheckBoxGroup, PlaceInput } from './common';

import { MAX_TEXT_INPUT_LENGTH } from '../constants';

import { formWrapper, loading } from './hoc';

export class AboutWhatHappenedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      description: '',
      advice: '',
      establishment: {},
    };
  }

  onEstablishmentChange = (item) => {
    this.setState({ establishment: { value: item.id, label: item.label } });
  }

  formData() {
    return {
      description: this.state.description,
    }
  }

  render() {
    return (
      <View>
        <PlaceInput
          placeholder="Empresa em que ocorreu"
          value={this.state.establishment.label}
          onValueChange={this.onEstablishmentChange}
          types={['establishment']}
          navigation={this.props.navigation}
          required
          placeScreenTitle="Informe a Empresa"
        />
        <Picker
          required
          placeholder="Tipo de assédio"
          items={this.props.data.formOptions.harassment_type_options}
        />
        <TextInput
          multiline
          required
          placeholder="Conte-nos mais sobre o ocorrido"
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
        />
        <DatePicker
          date={this.state.date}
          required
          placeholder="Quando ocorreu"
          maxDate={new Date(Date.now())}
          onDateChange={date => this.setState({ date })}
        />
        <CheckBoxGroup
          label="Você tomou alguma providência com relação ao ocorrido?"
          options={this.props.data.formOptions.followup_actions_options}
        />
        <Picker
          required
          placeholder="Você recomendaria essa empresa depois do ocorrido?"
          items={this.props.data.formOptions.yes_no_optional_options}
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
        <Button
          onPress={() => this.props.navigation.navigate('AboutYou', { formData: this.formData() })}
          title="Prosseguir"
        />
      </View>
    );
  }
}

const valueLabelShape = PropTypes.arrayOf(PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string,
})).isRequired;

AboutWhatHappenedForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    formOptions: PropTypes.shape({
      harassment_type_options: valueLabelShape,
      followup_actions_options: valueLabelShape,
      yes_no_optional_options: valueLabelShape,
    }).isRequired,
  }).isRequired,
};

export default formWrapper(loading(AboutWhatHappenedForm));