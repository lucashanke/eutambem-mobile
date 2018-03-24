import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { BLACK } from '../../styles';

const style = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: BLACK,
  },
});

const SectionText = props => (
  <View style={style.container}>
    <Text style={style.text}>
      {props.title}
    </Text>
  </View>
);

SectionText.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionText;
