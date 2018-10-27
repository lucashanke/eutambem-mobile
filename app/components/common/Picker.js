import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet, Picker as PickerAndroid, PickerIOS, Platform } from 'react-native';
import Modal from 'react-native-modal';

import appStyles from '../../styles';
import Button from '../common/Button';
import { TextInput } from '../common/TextInput';
import input from '../hoc/input';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  innerContainer: {
    backgroundColor: 'white',
    opacity: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const UNSELECTED = -1;

export class Picker extends Component {
  state = {
    modalVisible: false,
    currentValue: '',
  };

  onValueChange = (itemValue) => {
    const callback = Platform.select({
      android: () => this.props.onValueChange(this.state.currentValue),
      ios: null,
    });
    if (itemValue !== UNSELECTED) {
      this.setState({ currentValue: itemValue }, callback);
    }
  };

  itemLabel = () => {
    const selected = this.props.items.find(item => item.value === this.props.value);
    if (selected) {
      return selected.label;
    }
    return Platform.select({
      ios: '',
      android: UNSELECTED,
    });
  };

  defaultValue = () =>
    Platform.select({
      ios: this.props.items[0].value,
      android: null,
    });

  confirm = () => {
    const value = this.state.currentValue || this.defaultValue();
    this.props.onValueChange(value);
    this.closeModal();
  };

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  inputRef = (component) => {
    this.input = component;
  };

  render() {
    return Platform.select({
      ios: (
        <View>
          <TextInput
            required={this.props.required}
            multiline
            autoGrow
            editable={false}
            placeholder={this.props.placeholder}
            value={this.itemLabel()}
            onFocus={() => this.openModal()}
            ref={this.inputRef}
          />
          <Modal
            transparent
            isVisible={this.state.modalVisible}
            style={styles.modalContainer}
            onRequestClose={() => this.closeModal()}
          >
            <View style={styles.innerContainer}>
              <View style={appStyles.modalHeader}>
                <Button
                  testID="cancel-button"
                  type="cancel"
                  onPress={() => this.closeModal()}
                  title="Cancelar"
                />
                <Button
                  testID="ok-button"
                  onPress={() => this.confirm()}
                  title="Ok"
                />
              </View>
              <View>
                <PickerIOS
                  style={{ width: '100%' }}
                  selectedValue={this.state.currentValue}
                  onValueChange={this.onValueChange}
                >
                  {this.props.items.map(item => (
                    <PickerIOS.Item
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </PickerIOS>
              </View>
            </View>
          </Modal>
        </View>
      ),
      android: (
        <View style={styles.row}>
          <Text style={{ width: '40%' }}>{this.props.placeholder}</Text>
          <PickerAndroid
            style={{ width: '60%' }}
            placeholder={this.props.placeholder}
            selectedValue={this.state.currentValue}
            onValueChange={this.onValueChange}
          >
            <PickerAndroid.Item
              label="Selecione"
              color="gray"
              value={UNSELECTED}
            />
            {this.props.items.map(item => (
              <PickerAndroid.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </PickerAndroid>
        </View>
      ),
    });
  }
}

Picker.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  onValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

Picker.defaultProps = {
  required: false,
};

export default input(Picker);
