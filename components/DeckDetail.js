import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DeckDetailTitle from './DeckDetailTitle';
import PrimaryButton from './PrimaryButton';
import { blue, purple, green, red } from '../utils/colors';
import { connect } from 'react-redux';
import { deleteDeck } from '../actions';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle,
    };
  };

  onDeleteDeck = () => {
    const { key } = this.props.navigation.state.params.key;

    const { title } = this.props.decks[key];

    this.props.dispatch(deleteDeck(title));

    this.props.navigation.goBack();
  };

  render() {
    console.log(
      'this.props.navigation.state.params',
      this.props.navigation.state.params
    );
    const { key } = this.props.navigation.state.params;

    console.log('key', key);

    console.log('this.props.decks', this.props.decks);

    const deck = this.props.decks.filter(d => d.title === key)[0];

    console.log('DECK', deck);

    const { title, questions } = deck;
    console.log(title);
    console.log(questions);
    return (
      <View
        style={{
          flex: 1,
          marginTop: 50,
        }}
      >
        <DeckDetailTitle title={title} questions={questions} />
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
            title="Delete Deck"
            backgroundColor={red}
            onPress={this.onDeleteDeck}
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

const mapStateToProps = state => ({
  decks: state.decks.decks,
});

export default connect(mapStateToProps)(DeckDetail);
