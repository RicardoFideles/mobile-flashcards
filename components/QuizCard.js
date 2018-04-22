import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

const QuizCard = ({ questions, currentQuestion, correctAnswers }) => {

  state = {
    cardTitle = '',
    currentShowing = 'question'
  }


  changeCardTitle = () => {

    if (this.state.currentQuestion === 'question') {
      this.setState({
        cardTitle = `Answer : ${questions[currentQuestion].answer}`,
        currentShowing : 'answer'
      })
    } else {
      this.setState({
        cardTitle = `Question : ${questions[currentQuestion].question}`,
        currentShowing : 'question'
      })
    }

  }

  return (
    <Card title={ this.state.title } >
      <View>
        <Text style={styles.questionsRemaining}>
          {`Question ${currentQuestion + 1} of ${questions.length}`}
        </Text>
      </View>
      <View style={styles.badgeStyle}>
        <Badge
          containerStyle={{ backgroundColor: 'violet' }}
          onPress={() =>
            this.setState({ showQuestion: !this.state.showQuestion })
          }
        >
          <Text>{this.state.showQuestion ? 'Answer' : 'Question'}</Text>
        </Badge>
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
        onPress={() => this.setState({ currentQuestion: currentQuestion + 1 })}
      />
    </Card>
  );
};

export default QuizCard;
