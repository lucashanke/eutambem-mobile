import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { RED } from '../../styles';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  inputWrapper: {
    flex: 1,
  },
  iconWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
});

const input = WrappedComponent =>
  class Input extends React.Component {
    static displayName = 'Input';

    static defaultProps = {
      required: false,
      showValidation: false,
    };

    static propTypes = {
      required: PropTypes.bool,
      onValueChange: PropTypes.func.isRequired,
      showValidation: PropTypes.bool,
    };

    state = {
      valid: !this.props.required,
    };

    onValueChange = (value, valid = true) => {
      const isInputValid = valid && this.isValid(value);
      this.props.onValueChange(value, isInputValid);
      this.setState({ valid: isInputValid });
    };

    isValid = value =>
      !this.props.required || (this.props.required && !_.isNil(value) && !_.isEmpty(value));

    render() {
      let alert = null;
      if (this.props.showValidation && !this.state.valid) {
        alert = (
          <View style={styles.iconWrapper}>
            <Icon
              name="md-alert"
              size={20}
              color={RED}
            />
          </View>
        );
      }

      return (
        <View style={styles.wrapper}>
          <View style={styles.inputWrapper}>
            <WrappedComponent
              {...this.props}
              onValueChange={this.onValueChange}
            />
          </View>
          {alert}
        </View>
      );
    }
  };

export default input;
