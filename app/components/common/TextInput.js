import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput as NativeTextInput } from 'react-native';
import appStyles from '../../styles';
import { MAX_TEXT_INPUT_LENGTH } from '../../constants';

class TextInput extends Component {
  blur = () => this.input.blur();

  inputRef = (component) => { this.input = component; }

  render() {
    let style = [appStyles.input];
    let autoGrow = false;
    if (this.props.multiline) {
      style = style.concat(appStyles.multilineInput);
      autoGrow = true;
    }

    return (
      <NativeTextInput
        style={style}
        maxLength={MAX_TEXT_INPUT_LENGTH}
        multiline={this.props.multiline}
        autoGrow={autoGrow}
        ref={this.inputRef}
        {...this.props}
      />
    );
  }
}

TextInput.propTypes = {
  multiline: PropTypes.bool,
};

TextInput.defaultProps = {
  multiline: false,
};

export default TextInput;
