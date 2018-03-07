import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'react-navigation';

import { SafeAreaView, View, TextInput, StyleSheet, Text, Platform } from 'react-native';
import Modal from 'react-native-modal';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import appStyles from '../../styles';
import Button from '../common/Button';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    top: Header.HEIGHT,
  },
  innerContainer: {
    backgroundColor: 'white',
    opacity: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-start',
    height: Platform.select({ android: '50%' }),
  },
  listView: {
    position: 'absolute',
    top: 44.5,
    backgroundColor: 'white',
  },
});

export default class PlacePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      itemSelected: { value: '', label: '' },
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(item) {
    this.setState({ itemSelected: { value: item.place_id, label: item.description } });
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
    return (
      <SafeAreaView>
        <TextInput
          style={appStyles.input}
          placeholder={this.props.placeholder}
          value={this.state.itemSelected.label}
          onFocus={() => this.openModal()}
          ref={this.inputRef.bind(this)}
        />
        <Modal
          isVisible={this.state.modalVisible}
          style={styles.modalContainer}
          onRequestClose={() => this.closeModal()}
        >
          <SafeAreaView style={styles.innerContainer}>
            <View style={appStyles.modalHeader}>
              <Button
                type="cancel"
                onPress={() => this.closeModal()}
                title="Cancelar"
              />
              <Text style={{ fontSize: 18 }}>
                Selecione o Local
              </Text>
            </View>
            <GooglePlacesAutocomplete
              placeholder="Procurar"
              minLength={2}
              autoFocus={false}
              returnKeyType="search"
              listViewDisplayed="auto"
              fetchDetails
              renderDescription={row => row.description}
              onPress={this.onValueChange}
              getDefaultValue={() => this.state.itemSelected.label}
              query={{
                key: 'AIzaSyAWu91LURMU-W5OVonOPtPSKT94jJV50wQ',
                language: 'pt-BR',
                types: this.props.types,
              }}
              styles={{ listView: styles.listView }}
            />
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    );
  }
}

PlacePicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
};

