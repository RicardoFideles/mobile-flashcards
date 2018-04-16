import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DeckDetailTitle from './DeckDetailTitle';
import ButtonDeckDetail from './ButtonDeckDetail';

class DeckDetail extends Component {
  state = {
    addButton: {
      title: 'Add Card',
      icon: 'add-circle',
      path: 'AddQuestion',
    },
    startButton: {
      title: 'Start Quiz',
      icon: 'play-arrow',
      path: 'Quiz',
    },
    homeButtton: {
      title: 'back Home',
      icon: '',
      path: 'Home',
    },
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle,
    };
  };

  render() {
    const deck = this.props.navigation.state.params.deck;
    const { addButton, startButton, homeButtton } = this.state;
    return (
      <View
        style={{
          flex: 1,
          marginTop: 50,
        }}
      >
        <DeckDetailTitle {...deck} />
        <View>
          <ButtonDeckDetail {...addButton} />
          <ButtonDeckDetail {...startButton} />
          <ButtonDeckDetail {...homeButtton} />
        </View>
      </View>
    );
  }
}

export default DeckDetail;
