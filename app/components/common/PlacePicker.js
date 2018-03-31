import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

import { TextInput } from '../common';

const PLACES_AUTOCOMPLETE_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

const fetchPlacesResults = (query, types) => {
  const keyParam = 'key=AIzaSyAWu91LURMU-W5OVonOPtPSKT94jJV50wQ';
  const inputParam = `input=${query}`;
  const typesParam = `types=${types}`;
  const languageParam = 'language=pt-BR';
  const componentsParam = 'components=country:br';
  return axios.get(`${PLACES_AUTOCOMPLETE_URL}?${keyParam}&${inputParam}&${typesParam}&${languageParam}&${componentsParam}`);
};

const style = StyleSheet.create({
  item: {
    padding: 10,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  itemLabel: {
    fontSize: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    margin: 10,
    marginLeft: 0,
    marginBottom: 0,
  },
  input: {
    flex: 1,
  },
});

const Item = props => (
  <View style={style.item}>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={style.itemLabel}>{props.label}</Text>
      <Text>{props.sublabel}</Text>
    </TouchableOpacity>
  </View>
);

Item.propTypes = {
  label: PropTypes.string.isRequired,
  sublabel: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default class PlacePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: [],
    };
  }

  onQueryChange = (query) => {
    if (query.length >= 3) {
      this.setState({
        suggestions: [],
      });
      fetchPlacesResults(query, this.props.types[0]).then(((response) => {
        this.setState({
          suggestions: response.data.predictions,
        });
      }));
    }
    this.setState({ query });
  }

  onPlaceSelect = (id, label) => {
    this.props.onPlaceChange({ id, label });
  }

  render() {
    return (
      <View>
        <View style={style.searchBar}>
          <View style={style.icon}>
            <Icon name="ios-search" size={20} />
          </View>
          <View style={style.input}>
            <TextInput
              required
              placeholder="Procurar"
              onChangeText={this.onQueryChange}
              value={this.state.query}
            />
          </View>
        </View>
        <FlatList
          data={this.state.suggestions.map(item => ({
            key: item.place_id,
            label: item.structured_formatting.main_text,
            sublabel: item.structured_formatting.secondary_text,
          }))}
          renderItem={({ item }) => (
            <Item
              label={item.label}
              sublabel={item.sublabel}
              onPress={() => this.onPlaceSelect(item.key, item.label)}
            />
          )}
        />
      </View>
    );
  }
}

PlacePicker.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPlaceChange: PropTypes.func.isRequired,
};

