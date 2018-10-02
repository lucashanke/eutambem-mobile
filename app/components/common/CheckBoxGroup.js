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
  }

  onClick = (key) => {
    let selectedItems = this.props.values;
    if (this.props.values.includes(key)) {
      selectedItems = selectedItems.filter(item => item !== key);
    } else {
      selectedItems = selectedItems.concat(key);
    }
    this.props.onItemToggle(selectedItems);
  }

  renderOptions = () => {
    return this.props.options.map(option => (
      <CheckBox
        key={option.value}
        onClick={() => this.onClick(option.value)}
        value={this.props.values.includes(option.value)}
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
  onItemToggle: PropTypes.func.isRequired,
};
