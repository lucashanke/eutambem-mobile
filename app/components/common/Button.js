import React from 'react';
import { Button as ButtonNative } from 'react-native';
import PropTypes from 'prop-types';

import { DARK_PURPLE, RED } from '../../styles';

const color = type => (type === 'cancel' ? RED : DARK_PURPLE);

const Button = props => (
  <ButtonNative
    color={color(props.type)}
    {...props}
  />
);

Button.propTypes = {
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'confirm',
};

export default Button;
