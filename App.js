import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import { Constants } from 'expo';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducer from './reducers';

import { MainNavigator } from './config/routes';
import CustomStatusBar from './components/CustomStatusBar';

export default class App extends Component {
  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
