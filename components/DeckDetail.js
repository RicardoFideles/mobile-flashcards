import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DeckDetailTitle from './DeckDetailTitle';
import PrimaryButton from './PrimaryButton';
import { blue, purple, green } from '../utils/colors';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle,
    };
  };

  render() {
    const { title, questions } = this.props.navigation.state.params.deck;
    console.log(title);
    console.log(questions);
    return (
      <View
        style={{
          flex: 1,
          marginTop: 50,
        }}
      >
        <DeckDetailTitle title={title} />
        <View>
          <PrimaryButton
            title="New Card"
            backgroundColor={blue}
            onPress={() =>
              this.props.navigation.navigate('NewCardContainer', {
                title,
              })
            }
          />
          <PrimaryButton
            title="Start Quiz"
            backgroundColor={green}
            onPress={() =>
              this.props.navigation.navigate('QuizContainer', {
                title,
                questions,
              })
            }
          />
        </View>
      </View>
    );
  }
}

export default DeckDetail;
