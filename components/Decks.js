import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllDecks } from '../actions';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Badge, Card } from 'react-native-elements';

class Decks extends Component {
  state = {
    decks: [
      {
        key: '1',
        title: 'History Questions',
        cards: [
          {
            title: 'Who ...?',
            result: 'corret',
          },

          {
            title: 'Who ...?',
            result: 'wrong',
          },
        ],
      },
      {
        key: '2',
        title: 'Math Questions',
        cards: [
          {
            title: 'Who ...?',
            result: 'corret',
          },

          {
            title: 'Who ...?',
            result: 'wrong',
          },
          {
            title: 'Who ...?',
            result: 'wrong',
          },
          {
            title: 'Who ...?',
            result: 'wrong',
          },
        ],
      },
    ],
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate('DeckDetail', {
          entryId: item.key,
          navTitle: item.title,
        })
      }
    >
      <View>
        <Card title={item.title} subtitle={`${item.cards.length} cards`}>
          <Text style={[{ textAlign: 'center' }]}>{`${
            item.cards.length
          } cards`}</Text>
        </Card>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { decks } = this.state;

    console.log(decks);
    return (
      <View style={styles.container}>
        <FlatList data={decks} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

const mapStateToProps = state => {
  const decks = state.decks;

  return { decks };
};

export default Decks;
