export const extractDecksList = ({ decks }) =>
  Object.keys(decks).map(key => ({
    title: decks[key].title,
    questions: decks[key].questions,
  }));
