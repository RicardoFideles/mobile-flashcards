import * as types from '../utils/constants';
import {
  getDecks,
  submitDeck,
  removeDeck,
  addQuestionToDeck,
} from '../utils/api';

export function fetchDecks() {
  return dispatch => {
    getDecks().then(decks => {
      dispatch({ type: types.RECEIVE_DECKS, payload: decks });
    });
  };
}

export function addNewDeck(deck) {
  return dispatch => {
    submitDeck(deck.title, deck).then(res => {
      dispatch({
        type: types.ADD_DECK,
        deck,
      });
    });
  };
}

export function deleteDeck(key) {
  return dispatch => {
    removeDeck(key).then(res => {
      dispatch({
        type: types.REMOVE_DECK,
        key: key,
      });
    });
  };
}

export function addCardToDeck(title, question) {
  console.log('adicionando CARD ao DECK');
  return dispatch => {
    addQuestionToDeck(title, question).then(res => {
      dispatch({
        type: types.ADD_CARD_TO_DECK,
        key: title,
        question: question,
      });
    });
  };
}

export function getDeck(deck) {
  return {
    type: types.GET_DECK,
    deck,
  };
}
