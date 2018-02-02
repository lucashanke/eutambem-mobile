import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import CreateReport from './app/screens/CreateReport';
import logo from './app/img/eutambem-combr-logo.png';
import Home from './app/screens/Home';

const styles = StyleSheet.create({
  logo: {
    width: '50%',
    height: '100%',
  },
  card: {
    backgroundColor: '#F5FCFF',
  },
});

const App = StackNavigator({
  Home: { screen: Home },
  CreateReport: { screen: CreateReport },
}, {
  navigationOptions: {
    headerTitle: <Image style={styles.logo} source={logo} />,
  },
  cardStyle: styles.card,
});

export default App;

