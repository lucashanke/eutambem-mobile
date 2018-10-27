import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { RED } from '../styles';

export default function ErrorMessage({ visible, children }) {
  if (!visible) return null;

  return (
    <Text style={{ color: RED }}>
      {children}
    </Text>
  );
}

ErrorMessage.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
