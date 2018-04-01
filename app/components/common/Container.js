import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView } from 'react-native';

import appStyles from '../../styles';

const Container = props => (
  <SafeAreaView style={appStyles.container}>
    <ScrollView style={[appStyles.innerContainer, props.innerContainerStyle]}>
      {props.children}
    </ScrollView>
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
