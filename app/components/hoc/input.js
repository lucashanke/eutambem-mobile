import React from 'react';

import { View, StyleSheet } from 'react-native';
import _ from 'lodash';
import { RED } from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';

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
})

const input = (WrappedComponent) => (
  class Input extends React.Component {
    static displayName = 'Input';

    static defaultProps = {
      required: false,
    };

    constructor(props) {
      super(props);
      this.state = {
        valid: props.required ? false : true,
      };
    }

    isValid = (value) => {
      return !this.props.required || (this.props.required && !_.isNil(value) && !_.isEmpty(value));
    };

    onValueChange = (value) => {
      const valid = this.isValid(value);
      this.props.onValueChange(value, valid);
      this.setState({ valid });
    };

    render() {
      let alert = null;
      if (this.props.showValidation && !this.state.valid) {
        alert = (
          <View style={styles.iconWrapper}>
            <Icon name="md-alert" size={20} color={RED} />
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
  }
);

export default input;