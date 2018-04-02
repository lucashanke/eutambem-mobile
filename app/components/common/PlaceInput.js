import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';

import TextInput from './TextInput';

const PlaceInput = (props) => {
  const onPlaceChange = (item) => {
    props.onValueChange(item);
    props.navigation.goBack(null);
  };

  return (
    <TextInput
      {...props}
      onFocus={() => {
        Keyboard.dismiss();
        props.navigation.navigate('PlaceScreen', {
          title: props.placeScreenTitle,
          types: props.types,
          onPlaceChange,
        });
      }}
    />
  );
};

PlaceInput.propTypes = {
  placeScreenTitle: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.oneOf(['establishnment', 'address'])).isRequired,
  onValueChange: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

PlaceInput.defaultProps = {
  placeScreenTitle: 'Informe o local',
};

export default PlaceInput;
