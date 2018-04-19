import React, { Component } from 'react';
import { View, Text } from 'react-native';

class QuizContainer extends Component {
  state = {};

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
      >
        <Text>DECK</Text>
      </View>
    );
  }
}

export default QuizContainer;
