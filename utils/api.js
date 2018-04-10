import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY } from '../utils/constants';
export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
}
