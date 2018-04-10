import React from 'react';
import { StatusBar, View, StyleSheet, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { Constants } from 'expo';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import reducer from './reducers';

import Decks from './components/Decks';
import AddDeck from './components/AddDeck';

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" size={30} color={tintColor} />
      ),
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus-square" size={30} color={tintColor} />
      ),
    },
  },
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Udacity Flash Cards',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    },
  },
});

export default class App extends React.Component {
  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar backgroundColor="purple" barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
