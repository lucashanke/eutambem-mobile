import React from 'react';
import ExternalButton from 'react-native-button';
import PropTypes from 'prop-types';

import { DARK_PURPLE, GREY } from '../../styles';

const color = type => (type === 'cancel' ? GREY : DARK_PURPLE);

const Button = props => (
  <ExternalButton
    style={{ fontSize: 17, color: color(props.type), padding: 7 }}
    {...props}
  >
    {props.title}
  </ExternalButton>
);

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'confirm',
};

export default Button;
