import React, { Component } from 'react';
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import {
  Card,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import { addCardToDeck } from '../actions';
import { connect } from 'react-redux';

class NewCardContainer extends Component {
  state = {
    questionText: '',
    answerText: '',
    errorMessage: '',
  };

  handleSubmit = () => {
    if (this.state.questionText && this.state.answerText) {
      const { questionText, answerText } = this.state;
      const title = this.props.navigation.state.params.title;

      const card = {
        question: questionText,
        answer: answerText,
      };

      this.props.dispatch(addCardToDeck(title, card));

      this.setState({
        errorMessage: false,
        questionText: '',
        answerText: '',
      });

      this.props.navigation.navigate('DeckDetail', {
        key: title,
        navTitle: title,
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
          alignContent: 'center',
        }}
        behavior="padding"
      >
        <Card title="Add a Card">
          <FormLabel>Question:</FormLabel>
          <FormInput
            onChangeText={questionText => this.setState({ questionText })}
            value={this.state.titleText}
          />
          <FormLabel>Answer:</FormLabel>
          <FormInput
            onChangeText={answerText => this.setState({ answerText })}
            value={this.state.titleText}
          />
          <FormValidationMessage>
            {this.state.errorMessage ? 'Both fields are required' : ''}
          </FormValidationMessage>
          <Button
            title="Submit"
            raised
            backgroundColor="rgb(72, 149, 236)"
            onPress={this.handleSubmit}
          />
        </Card>
      </KeyboardAvoidingView>
    );
  }
}
export default connect(null)(NewCardContainer);
