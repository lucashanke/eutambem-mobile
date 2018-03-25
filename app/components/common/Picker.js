import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet, Picker as PickerAndroid, PickerIOS, Platform } from 'react-native';
import Modal from 'react-native-modal';

import appStyles from '../../styles';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

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

export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      itemSelected: {},
      currentItem: Platform.select({
        ios: this.props.items[0],
        android: { value: null },
      }),
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(itemValue) {
    if (itemValue !== UNSELECTED) {
      const itemLabel = this.props.items.find(item => item.value === itemValue).label;
      this.setState({ currentItem: { value: itemValue, label: itemLabel } });
    }
  }

  confirm() {
    this.setState({ itemSelected: this.state.currentItem });
    this.closeModal();
  }

  openModal() {
    this.input.blur();
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  inputRef(component) { this.input = component; }

  render() {
    return Platform.select({
      ios: (
        <View>
          <TextInput
            placeholder={this.props.placeholder}
            value={this.state.itemSelected.label}
            onFocus={() => this.openModal()}
            ref={this.inputRef.bind(this)}
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
                  type="cancel"
                  onPress={() => this.closeModal()}
                  title="Cancelar"
                />
                <Button
                  onPress={() => this.confirm()}
                  title="Ok"
                />
              </View>
              <View>
                <PickerIOS
                  style={{ width: '100%' }}
                  selectedValue={this.state.currentItem.value}
                  onValueChange={this.onValueChange}
                >
                  { this.props.items.map(item => (
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
          <Text style={{ width: '40%' }}>
            {this.props.placeholder}
          </Text>
          <PickerAndroid
            style={{ width: '60%' }}
            placeholder={this.props.placeholder}
            selectedValue={this.state.currentItem.value}
            onValueChange={this.onValueChange}
          >
            <PickerAndroid.Item
              label="Selecione"
              color="gray"
              value={UNSELECTED}
            />
            { this.props.items.map(item => (
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
  placeholder: PropTypes.string.isRequired,
};

