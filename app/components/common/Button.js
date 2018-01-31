import React from 'react';
import { Button } from 'react-native';

import appStyles from '../../styles';

const button = props => (<Button style={appStyles.button} color="#961687" {...props} />);

export default button;
