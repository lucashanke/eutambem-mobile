import React from 'react';

import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import AboutWhatHappened from './screens/AboutWhatHappened';
import AboutYou from './screens/AboutYou';
import PrivacyPolicy from './screens/PrivacyPolicy';
import logo from './img/logo.png';
import Home from './screens/Home';
import PlaceScreen from './screens/PlaceScreen';
import MapFeed from './screens/MapFeed';
import SendReport from './screens/SendReport';

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

const CreateReportStack = createStackNavigator({
  AboutWhatHappened: { screen: AboutWhatHappened },
  AboutYou: { screen: AboutYou },
  SendReport: { screen: SendReport },
  PrivacyPolicy: { screen: PrivacyPolicy },
  PlaceScreen: { screen: PlaceScreen },
}, {
  navigationOptions: { ...stackNavigationOptions, title: 'Criar Relato' },
  cardStyle: styles.card,
});


const HomeStack = createStackNavigator({
  Home: { screen: Home },
}, {
  navigationOptions: { ...stackNavigationOptions, title: 'Início' },
  cardStyle: styles.card,
});


const MapFeedStack = createStackNavigator({
  MapFeed: { screen: MapFeed },
}, {
  navigationOptions: { ...stackNavigationOptions, title: 'Mapa de Relatos' },
  cardStyle: styles.card,
});


const Tabs = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    MapFeed: { screen: MapFeedStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => { // eslint-disable-line react/prop-types
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'CreateReport') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'MapFeed') {
          iconName = `ios-navigate${focused ? '' : '-outline'}`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: GREEN,
      inactiveTintColor: GREY,
    },
    animationEnabled: false,
    swipeEnabled: false,
  },
);

const App = createStackNavigator({
  Tabs: { screen: Tabs },
  CreateReport: { screen: CreateReportStack },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default App;
