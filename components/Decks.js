import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllDecks } from '../actions';
import { Text, View, TouchableOpacity } from 'react-native';

class Decks extends Component {
  componentDidMount() {
    // const { dispatch } = this.props;
    // getAllDecks();
  }

  render() {
    return (
      <View>
        <Text>Página inicial</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const decks = state.decks;

  return { decks };
};

export default Decks;
