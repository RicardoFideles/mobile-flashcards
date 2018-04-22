import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY } from '../utils/constants';

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatResults);
}

export function formatResults(results) {
  if (results == null) {
    return [];
  } else {
    let temp = JSON.parse(results);
    let ret = Object.keys(temp).map(key => ({
      title: temp[key].title,
      questions: temp[key].questions,
    }));
    return ret;
  }
}

export function addQuestionToDeck(key, question) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    let temp = JSON.parse(results);
    temp[key].questions.push(question);
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(temp));
  });
}

export function removeDeck(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    let temp = JSON.parse(results);
    temp[key] = undefined;
    delete temp[key];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(temp));
  });
}
export function submitDeck(key, deck) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [key]: deck,
    })
  );
}
