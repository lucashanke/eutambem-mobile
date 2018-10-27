import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

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

InputReview.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputReview;
