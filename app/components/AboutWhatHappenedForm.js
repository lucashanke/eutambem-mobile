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
      formData: {
        establishment: {},
        harassmentType: '',
        description: '',
        date: null,
        followupActions: [],
        wouldRecommend: '',
        advice: '',
      },
    };
  }

  updateFormDataValue = (key, value) => {
    const { formData } = this.state;
    if (key in formData) {
      formData[key] = value;
      this.setState({ formData });
    } else {
      console.error('Trying to update key that is not present in formData.');
    }
  }

  render() {
    return (
      <View>
        <PlaceInput
          placeholder="Empresa em que ocorreu"
          value={this.state.formData.establishment.label}
          onValueChange={item => this.updateFormDataValue('establishment', { value: item.id, label: item.label })}
          types={['establishment']}
          navigation={this.props.navigation}
          required
          placeScreenTitle="Informe a Empresa"
        />
        <Picker
          required
          placeholder="Tipo de assédio"
          value={this.state.formData.harassmentType}
          onValueChange={value => this.updateFormDataValue('harassmentType', value)}
          items={this.props.data.formOptions.harassment_type_options}
        />
        <TextInput
          multiline
          required
          placeholder="Conte-nos mais sobre o ocorrido"
          onChangeText={value => this.updateFormDataValue('description', value)}
          value={this.state.formData.description}
        />
        <DatePicker
          date={this.state.formData.date}
          required
          placeholder="Quando ocorreu"
          maxDate={new Date(Date.now())}
          onDateChange={date => this.updateFormDataValue('date', date)}
        />
        <CheckBoxGroup
          label="Você tomou alguma providência com relação ao ocorrido?"
          onItemToggle={values => this.updateFormDataValue('followupActions', values)}
          options={this.props.data.formOptions.followup_actions_options}
        />
        <Picker
          required
          value={this.state.formData.wouldRecommend}
          onValueChange={value => this.updateFormDataValue('wouldRecommend', value)}
          placeholder="Você recomendaria essa empresa depois do ocorrido?"
          items={this.props.data.formOptions.yes_no_optional_options}
        />
        <TextInput
          style={[appStyles.input, appStyles.multilineInput]}
          multiline
          autoGrow
          maxLength={MAX_TEXT_INPUT_LENGTH}
          placeholder="Qual seu conselho para os gestores?"
          onChangeText={advice => this.updateFormDataValue('advice', advice)}
          value={this.state.formData.advice}
        />
        <Button
          onPress={() => this.props.navigation.navigate('AboutYou', { formData: this.state.formData })}
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
