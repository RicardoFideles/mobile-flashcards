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
      console.log('removendo deck');
      console.log(action.key);
      return {
        ...state,
        decks: state.decks.filter(c => c.title !== action.key),
      };
    case types.ADD_CARD_TO_DECK:
      console.log('ADD_CARD_TO_DECK..');
      return {
        ...state,
        decks: state.decks.map(d => {
          if (d.title == action.key) {
            d.questions.push(action.question);
          }
          console.log(d);
          return d;
        }),
      };

    default:
      return state;
  }
};

function addCardToDeck(decks) {
  console.log('----');
  console.log(decks);
  let a = state.decks.map(d => {
    if (d.title == action.key) {
      return {
        ...d,
        questions: [d.questions, action.question],
      };
    } else {
      return d;
    }
  });

  console.log('zzz');

  console.log(a);

  return a;
}

export default decks;
