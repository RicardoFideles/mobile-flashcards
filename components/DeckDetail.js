import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle,
    };
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      />
    );
  }
}

export default DeckDetail;
