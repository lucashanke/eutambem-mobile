import React from 'react';
import PropTypes from 'prop-types';
import ExternalDatePicker from 'react-native-datepicker';
import { StyleSheet } from 'react-native';

import appStyles, { DARK_PURPLE, GREY, PLACEHOLDER_GREY } from '../../styles';
import input from '../hoc/input';

export const style = StyleSheet.create({
  btnTextCancel: {
    color: GREY,
    fontSize: 17,
  },
  btnTextConfirm: {
    color: DARK_PURPLE,
    fontSize: 17,
  },
  placeholderText: {
    color: PLACEHOLDER_GREY,
  },
  date: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

const DatePicker = props => (
  <ExternalDatePicker
    {...props}
    onDateChange={props.onValueChange}
    date={props.value}
    mode="date"
    format="DD/MMM/YYYY"
    confirmBtnText="Ok"
    cancelBtnText="Cancelar"
    showIcon={false}
    style={style.date}
    customStyles={{
      dateInput: appStyles.input,
      placeholderText: style.placeholderText,
      btnTextCancel: style.btnTextCancel,
      btnTextConfirm: style.btnTextConfirm,
    }}
  />
);

DatePicker.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
}

DatePicker.defaultProps = {
  value: null,
};

export default input(DatePicker);
