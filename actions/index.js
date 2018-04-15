import * as types from '../utils/constants';
export function getAllDecks() {
  return {
    type: types.GET_ALL_DECKS,
    decks,
  };
}

export function getDeck(deck) {
  return {
    type: types.GET_DECK,
    deck,
  };
}

export function deleteDeck(deck) {
  return {
    type: types.DELETE_DECK,
    deck,
  };
}

export const addDeck = data => ({
  return: types.ADD_DECK,
  data,
});
