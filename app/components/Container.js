import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';

import appStyles from '../styles';

const Container = props => (
  <SafeAreaView style={appStyles.container}>
    <KeyboardAvoidingView
      style={appStyles.innerContainer}
      keyboardVerticalOffset={60}
      behavior="position"
    >
      {props.children}
    </KeyboardAvoidingView>
  </SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Container;
