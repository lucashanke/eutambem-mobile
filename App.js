import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import CreateReport from './app/screens/CreateReport';
import logo from './app/img/logo.png';
import Home from './app/screens/Home';

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '80%',
  },
});

const App = StackNavigator({
  Home: { screen: Home },
  CreateReport: { screen: CreateReport },
}, {
  navigationOptions: {
    headerTitle: <Image style={styles.logo} source={logo} resizeMode="contain" />,
  },
});

export default App;
