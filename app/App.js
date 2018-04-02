import React from 'react';

import { StyleSheet, Image } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import AboutWhatHappened from './screens/AboutWhatHappened';
import AboutYou from './screens/AboutYou';
import PrivacyPolicy from './screens/PrivacyPolicy';
import logo from './img/logo.png';
import Home from './screens/Home';
import PlaceScreen from './screens/PlaceScreen';
import { GREEN, BLACK, GREY } from './styles';

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '80%',
  },
  card: {
    backgroundColor: '#ffffff',
  },
});

const stackNavigationOptions = {
  headerTitle: <Image style={styles.logo} source={logo} resizeMode="contain" />,
  headerTintColor: GREEN,
  headerTitleStyle: { color: BLACK },
};

const CreateReportStack = StackNavigator({
  AboutWhatHappened: { screen: AboutWhatHappened },
  AboutYou: { screen: AboutYou },
  PrivacyPolicy: { screen: PrivacyPolicy },
  PlaceScreen: { screen: PlaceScreen },
}, {
  navigationOptions: { ...stackNavigationOptions, title: 'Criar Relato' },
  cardStyle: styles.card,
});

const HomeStack = StackNavigator({
  Home: { screen: Home },
}, {
  navigationOptions: { ...stackNavigationOptions, title: 'Início' },
  cardStyle: styles.card,
});

const App = TabNavigator(
  {
    Home: { screen: HomeStack },
    CreateReport: { screen: CreateReportStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => { // eslint-disable-line react/prop-types
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'CreateReport') {
          iconName = `ios-create${focused ? '' : '-outline'}`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: GREEN,
      inactiveTintColor: GREY,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

export default App;
