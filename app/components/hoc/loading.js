/* eslint-disable react/prop-types */

import React from 'react';
import { ActivityIndicator } from 'react-native';

import _ from 'lodash';
import { SOFT_PURPLE } from '../../styles';

const loading = WrappedComponent => (props) => {
  if (_.isNil(props.data)) {
    return (<ActivityIndicator
      size="large"
      color={SOFT_PURPLE}
    />);
  }
  return <WrappedComponent {...props} />;
};

export default loading;
