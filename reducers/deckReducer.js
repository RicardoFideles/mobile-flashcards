import * as types from '../utils/constants';
import { initialState } from '../config/initialState';

const decks = (state = initialState, action) => {
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
    case types.ADD_DECK:
      console.log(action);
      return {
        ...state,
        [action.data.title]: {
          ...action.data,
          questions: [],
        },
      };
    default:
      console.log(state);
      return state;
  }
};

export default decks;
