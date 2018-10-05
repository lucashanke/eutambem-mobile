import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput as NativeTextInput } from 'react-native';
import appStyles from '../../styles';
import { MAX_TEXT_INPUT_LENGTH } from '../../constants';

class TextInput extends Component {

  inputRef = (component) => { this.input = component; };

  placeholder = () => `${this.props.placeholder} ${!this.props.required ? '(Opcional)' : ''}`;

  componentDidUpdate = () => {
    if (this.props.blur) {
      this.input.blur();
    }
  };

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
};

TextInput.defaultProps = {
  multiline: false,
  required: false,
};

export default TextInput;
