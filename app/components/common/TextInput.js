import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput as NativeTextInput } from 'react-native';
import appStyles, { PLACEHOLDER_GREY } from '../../styles';
import { MAX_TEXT_INPUT_LENGTH } from '../../constants';
import input from '../hoc/input';

export class TextInput extends Component {
  componentDidUpdate() {
    if (this.props.blur) {
      this.input.blur();
    }
  }

  inputRef = (component) => {
    this.input = component;
  };

  placeholder = () => `${this.props.placeholder} ${!this.props.required ? '(Opcional)' : ''}`;

  render() {
    let style = [appStyles.input];
    let autoGrow = false;
    if (this.props.multiline) {
      style = style.concat(appStyles.multilineInput);
      autoGrow = true;
    }

    return (
      <NativeTextInput
        {...this.props}
        style={style}
        maxLength={MAX_TEXT_INPUT_LENGTH}
        multiline={this.props.multiline}
        onChangeText={this.props.onValueChange}
        placeholder={this.placeholder()}
        placeholderTextColor={PLACEHOLDER_GREY}
        autoGrow={autoGrow}
        ref={this.inputRef}
      />
    );
  }
}

TextInput.propTypes = {
  multiline: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  blur: PropTypes.func,
  onValueChange: PropTypes.func,
};

TextInput.defaultProps = {
  multiline: false,
  required: false,
  blur: () => {},
  onValueChange: () => {},
};

export default input(TextInput);
