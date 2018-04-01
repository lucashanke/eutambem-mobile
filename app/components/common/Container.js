import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import appStyles from '../../styles';

const keyboardAvoidingProps = Platform.select({
  ios: { behavior: 'position', keyboardVerticalOffset: 50 },
  android: {},
});

const Container = props => (
  <SafeAreaView style={appStyles.container}>
    <KeyboardAvoidingView {...keyboardAvoidingProps}>
      <ScrollView style={[appStyles.innerContainer, props.innerContainerStyle]}>
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  innerContainerStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
};

Container.defaultProps = {
  innerContainerStyle: {},
};

export default Container;
