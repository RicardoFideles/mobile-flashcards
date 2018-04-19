import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import HomeContainer from '../containers/HomeContainer';
import DeckDetail from '../components/DeckDetail';
import AddDeck from '../components/AddDeck';
import NewCardContainer from '../containers/NewCardContainer';
import QuizContainer from '../containers/QuizContainer';
import { purple } from '../utils/colors';

export const Tabs = TabNavigator({
  HomeContainer: {
    screen: HomeContainer,
    navigationOptions: {
      tabBarLabel: 'Home',
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

export const MainNavigator = StackNavigator({
  HomeContainer: {
    screen: Tabs,
    navigationOptions: {
      title: 'Udacity Flash Cards',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    },
  },
  NewCardContainer: {
    screen: NewCardContainer,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    },
  },
  QuizContainer: {
    screen: QuizContainer,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    },
  },
});
