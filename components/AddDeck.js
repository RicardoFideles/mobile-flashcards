import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {
  Button,
  Card,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import { connect } from 'react-redux';

import { addNewDeck } from '../actions';
import { submitDeck } from '../utils/api';

class AddDeck extends Component {
  state = {
    titleText: '',
    errorMessage: false,
  };

  handleSubmit = () => {
    const { titleText } = this.state;

    if (titleText) {
      this.setState({
        errorMessage: false,
        titleText: '',
      });
      const newDeck = { title: titleText, questions: [] };

      console.log('titleText ==>', titleText);
      console.log('newDeck ==> ', newDeck);

      this.props.dispatch(addNewDeck(newDeck));

      this.props.navigation.navigate('DeckDetail', {
        deck: newDeck,
        navTitle: titleText,
      });
    } else {
      this.setState({ errorMessage: true });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
        behavior="padding"
      >
        <Card title="What is the title of your new deck?">
          <FormInput
            onChangeText={titleText => this.setState({ titleText })}
            value={this.state.titleText}
          />
          <FormValidationMessage>
            {this.state.errorMessage ? 'This field is required' : ''}
          </FormValidationMessage>
          <Button
            title="Add a new Deck"
            raised
            backgroundColor="rgb(72, 149, 236)"
            onPress={this.handleSubmit}
          />
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(null)(AddDeck);
