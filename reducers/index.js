import * as types from '../utils/constants';

function decks(state = {}, action) {
  switch (action.type) {
    case types.GET_ALL_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case types.GET_DECK:
      return {
        ...state,
        ...action.deck,
      };
    default:
      return state;
  }
}

export default decks;
