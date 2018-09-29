import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import { DARK_PURPLE } from '../../styles';
import CheckBox from './CheckBox';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: DARK_PURPLE,
  },
  checkbox: {
    paddingTop: 10,
  },
});

export default class CheckBoxGroup extends Component {
  constructor(props) {
    super(props);
    const values = {};
    props.options.forEach((option) => { values[option.value] = false; });
    this.state = { values };
  }

  onClick(key) {
    const { values } = this.state;
    values[key] = !values[key];
    this.setState({ values });
  }

  renderOptions() {
    return this.props.options.map(option => (
      <CheckBox
        key={option.value}
        onClick={() => this.onClick(option.value)}
        isChecked={this.state.values[option.value]}
        label={option.label}
      />
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.label}</Text>
        {this.renderOptions()}
      </View>
    );
  }
}

CheckBoxGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    key: PropTypes.string,
  })).isRequired,
  label: PropTypes.string.isRequired,
};
