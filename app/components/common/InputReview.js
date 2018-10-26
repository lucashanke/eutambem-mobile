import React from 'react';
import { Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  wrapper: {
    marginTop: 5,
  },
  label: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  value: {
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
});

const InputReview = props => (
  <Text style={style.wrapper}>
    <Text style={style.label}>{props.label}: </Text>
    <Text style={style.value}>{props.value}</Text>
  </Text>
);

export default InputReview;