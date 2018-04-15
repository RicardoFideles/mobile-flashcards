import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

const DeckDetailTitle = ({ title, questions }) => {
  return (
    <Card title={title}>
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>
        {questions ? questions.length : 0} cards
      </Text>
    </Card>
  );
};

export default DeckDetailTitle;
