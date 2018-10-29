import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput as NativeTextInput, View, TouchableOpacity } from 'react-native';
import validate from 'validate.js';

import appStyles, { PLACEHOLDER_GREY } from '../../styles';
import { MAX_TEXT_INPUT_LENGTH } from '../../constants';
import input from '../hoc/input';

export class TextInput extends Component {
  onChangeText = (value) => {
    let errors;
    if (this.props.format === 'email') {
      errors = validate.single(value, { email: true });
    }
    this.props.onValueChange(value, !errors);
  };

  placeholder = () => `${this.props.placeholder} ${!this.props.required ? '(Opcional)' : ''}`;

  render() {
    let style = [appStyles.input];
    let autoGrow = false;
    if (this.props.multiline) {
      style = style.concat(appStyles.multilineInput);
      autoGrow = true;
    }

    const nativeInput = (
      <NativeTextInput
        {...this.props}
        style={style}
        maxLength={MAX_TEXT_INPUT_LENGTH}
        multiline={this.props.multiline}
        onChangeText={this.onChangeText}
        placeholder={this.placeholder()}
        placeholderTextColor={PLACEHOLDER_GREY}
        autoGrow={autoGrow}
        ref={this.inputRef}
      />
    );

    return this.props.editable ? nativeInput : (
      <TouchableOpacity onPress={this.props.onFocus}>
        <View pointerEvents="none">
          {nativeInput}
        </View>
      </TouchableOpacity>
    );
  }
}

TextInput.propTypes = {
  editable: PropTypes.bool,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onValueChange: PropTypes.func,
  onFocus: PropTypes.func,
  format: PropTypes.string,
};

TextInput.defaultProps = {
  editable: true,
  multiline: false,
  required: false,
  onFocus: () => {},
  onValueChange: () => {},
  format: 'none',
};

export default input(TextInput);
