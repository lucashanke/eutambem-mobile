import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';

import appStyles from '../styles';

const Container = props => (
  <SafeAreaView style={appStyles.container}>
    {props.children}
  </SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Container;
