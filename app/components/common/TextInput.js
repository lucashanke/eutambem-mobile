import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput as NativeTextInput, View, TouchableOpacity } from 'react-native';

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

    const input = (
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

    return this.props.editable ? input : (
      <TouchableOpacity onPress={this.props.onFocus}>
        <View pointerEvents='none'>
          {input}
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
  blur: PropTypes.bool,
  onValueChange: PropTypes.func,
};

TextInput.defaultProps = {
  editable: true,
  multiline: false,
  required: false,
  blur: false,
  onValueChange: () => {},
};

export default input(TextInput);
