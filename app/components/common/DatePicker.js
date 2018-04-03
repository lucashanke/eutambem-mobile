import React from 'react';
import ExternalDatePicker from 'react-native-datepicker';
import { StyleSheet } from 'react-native';

import appStyles, { DARK_PURPLE, GREY } from '../../styles';

export const style = StyleSheet.create({
  btnTextCancel: {
    color: GREY,
    fontSize: 17,
  },
  btnTextConfirm: {
    color: DARK_PURPLE,
    fontSize: 17,
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
    mode="date"
    format="DD/MMM/YYYY"
    confirmBtnText="Ok"
    cancelBtnText="Cancelar"
    showIcon={false}
    style={style.date}
    customStyles={{
      dateInput: appStyles.input,
      btnTextCancel: style.btnTextCancel,
      btnTextConfirm: style.btnTextConfirm,
    }}
  />
);

export default DatePicker;
