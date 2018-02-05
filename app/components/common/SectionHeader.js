import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { DARK_PURPLE } from '../../styles';

const style = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: DARK_PURPLE,
  },
});

const SectionHeader = props => (
  <View style={style.container}>
    <Text style={style.text}>
      {props.title.toUpperCase()}
    </Text>
  </View>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
