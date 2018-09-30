import React from 'react';
import { Text, View } from 'react-native';

import { loading } from './hoc';

const Report = () => (
  <View>
    <Text>
      Report enviado!
    </Text>
  </View>
);

export default loading(Report);
