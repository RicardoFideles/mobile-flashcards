import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Badge, Card } from 'react-native-elements';
import PropTypes from 'prop-types';
import { extractDecksList } from '../utils/extractDecks';
import { fetchDecks } from '../actions';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate('DeckDetail', {
          key: item.title,
          navTitle: item.title,
        })
      }
    >
      <View>
        <Card title={item.title} subtitle={`${item.questions.length} cards`}>
          <Text style={[{ textAlign: 'center' }]}>{`${
            item.questions.length
          } cards`}</Text>
        </Card>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.decks.length > 0 ? (
          <FlatList data={this.props.decks} renderItem={this.renderItem} />
        ) : (
          <Card title="Create a new Deck!" />
        )}
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

const mapStateToProps = state => ({
  decks: state.decks.decks,
});

export default connect(mapStateToProps, { fetchDecks })(HomeContainer);
