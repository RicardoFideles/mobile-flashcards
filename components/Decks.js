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

class Decks extends Component {
  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate('DeckDetail', {
          deck: item,
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
    const { content } = this.props;

    return (
      <View style={styles.container}>
        <FlatList data={content} renderItem={this.renderItem} />
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

Decks.propTypes = {
  content: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  content: extractDecksList(state),
});

export default connect(mapStateToProps)(Decks);
