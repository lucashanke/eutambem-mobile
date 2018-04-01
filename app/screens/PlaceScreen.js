import React from 'react';
import PropTypes from 'prop-types';

import { PlacePicker, Container } from '../components/common';

const PlaceScreen = props => (
  <Container innerContainerStyle={{ padding: '2%' }}>
    <PlacePicker
      types={props.navigation.state.params.types}
      onPlaceChange={props.navigation.state.params.onPlaceChange}
    />
  </Container>
);

PlaceScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.state.params.title,
});

PlaceScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
        onPlaceChange: PropTypes.func.isRequired,
      }),
    }),
  }).isRequired,
};

export default PlaceScreen;
