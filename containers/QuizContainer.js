import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';

class QuizContainer extends Component {
  state = {
    showQuestion: true,
    questions: [],
    currentQuestion: 0,
    correctAnswers: 0,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle,
    };
  };

  componentDidMount() {
    this.setState({
      questions: this.props.navigation.state.params.questions,
    });
  }

  backToDeck() {
    this.props.navigation.goBack();
  }

  renderCard() {
    const { questions, currentQuestion, correctAnswers } = this.state;

    if (currentQuestion < questions.length) {
      return (
        <Card
          title={
            this.state.showQuestion
              ? `Question: ${questions[currentQuestion].question}`
              : `Answer: ${questions[currentQuestion].answer}`
          }
        >
          <View>
            <Text style={styles.questionsRemaining}>
              {`Question ${currentQuestion + 1} of ${questions.length}`}
            </Text>
          </View>
          <View style={styles.res}>
            <Text
              containerStyle={{ backgroundColor: 'violet' }}
              onPress={() =>
                this.setState({ showQuestion: !this.state.showQuestion })
              }
            />
            <Text>{this.state.showQuestion ? 'Answer' : 'Question'}</Text>
          </View>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Correct"
            backgroundColor="#377D22"
            onPress={() => {
              this.setState({
                currentQuestion: currentQuestion + 1,
                correctAnswers: correctAnswers + 1,
              });
            }}
          />
          <Button
            buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
            title="Incorrect"
            backgroundColor="#C3392A"
            onPress={() =>
              this.setState({ currentQuestion: currentQuestion + 1 })
            }
          />
        </Card>
      );
    }
    return (
      <Card title={`You got ${correctAnswers} out of ${questions.length}`}>
        <Button
          buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
          title="Back to Deck"
          backgroundColor="#C3392A"
          onPress={() => this.backToDeck()}
        />
      </Card>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        {this.renderCard()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  questionsRemaining: {
    textAlign: 'center',
    marginBottom: 10,
  },
  res: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 0,
  },
});

export default QuizContainer;
