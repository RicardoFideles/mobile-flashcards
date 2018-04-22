import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

const QuizCard = ({ question, answer, currentQuestion, totalQuestion }) => {
  return (
    <Card title={question}>
      <View>
        <Text style={styles.questionsRemaining}>
          {`Question ${currentQuestion + 1} of ${totalQuestion}`}
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
