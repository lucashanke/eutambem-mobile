import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from './TextInput';
import input from '../hoc/input';

export const PlaceInput = (props) => {
  const onPlaceChange = (item) => {
    props.onValueChange(item);
    props.navigation.goBack(null);
  };

  return (
    <TextInput
      {...props}
      editable={false}
      onFocus={() => {
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
  types: PropTypes.arrayOf(PropTypes.oneOf(['establishment', 'address'])).isRequired,
  onValueChange: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

PlaceInput.defaultProps = {
  placeScreenTitle: 'Informe o local',
};

export default input(PlaceInput);
