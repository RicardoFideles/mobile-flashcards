import * as types from '../utils/constants';
import { initialState } from '../config/initialState';

const decks = (state = { decks: [] }, action) => {
  switch (action.type) {
    case types.RECEIVE_DECKS:
      return {
        ...state,
        decks: action.payload,
      };
    case types.ADD_DECK:
      return {
        ...state,
        decks: [...state.decks, action.deck],
      };

    case types.REMOVE_DECK:
      return {
        ...state,
        decks: state.decks.filter(c => c.title !== action.key),
      };
    case types.ADD_CARD_TO_DECK:
      return {
        ...state,
        decks: state.decks.map(d => {
          if (d.title == action.key) {
            d.questions.push(action.question);
          }
          return d;
        }),
      };

    default:
      return state;
  }
};

export default decks;
