import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from 'react-native-search-box';

import { DARK_GREY, LIGHT_GREY, GREY } from '../../styles';

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
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: LIGHT_GREY,
    borderBottomWidth: 1,
  },
  itemLabel: {
    fontSize: 16,
    color: DARK_GREY,
  },
  itemSubLabel: {
    color: GREY,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
});

const Item = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={style.item}>
      <View style={style.icon}>
        <Icon name="ios-pin" size={20} />
      </View>
      <View>
        <Text style={style.itemLabel}>{props.label}</Text>
        <Text style={style.itemSubLabel}>{props.sublabel}</Text>
      </View>
    </View>
  </TouchableOpacity>
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
  }

  onPlaceSelect = (id, label) => {
    this.props.onPlaceChange({ id, label });
  }

  render() {
    return (
      <View>
        <Search
          backgroundColor="transparent"
          cancelButtonTextStyle={{ color: GREY }}
          onChangeText={this.onQueryChange}
          searchIconCollapsedMargin={30}
          placeholder="Procurar"
          inputStyle={{ padding: -10 }}
        />
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

