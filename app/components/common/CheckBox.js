import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import ExternalCheckBox from 'react-native-check-box';
import { DARK_PURPLE } from '../../styles';

const styles = StyleSheet.create({
  checkbox: {
    paddingTop: 10,
  },
});

const CheckBox = props => (
  <ExternalCheckBox
    {...props}
    style={styles.checkbox}
    checkBoxColor={DARK_PURPLE}
    rightText={props.label}
  />
);

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CheckBox;
