import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import ExternalCheckBox from 'react-native-check-box';
import { DARK_PURPLE } from '../../styles';
import input from '../hoc/input';

const styles = StyleSheet.create({
  checkbox: {
    paddingTop: 10,
  },
});

const CheckBox = props => (
  <ExternalCheckBox
    {...props}
    isChecked={props.value}
    style={styles.checkbox}
    checkBoxColor={DARK_PURPLE}
    rightText={props.label}
  />
);

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool,
};

CheckBox.defaultProps = {
  value: false,
};

export default input(CheckBox);
