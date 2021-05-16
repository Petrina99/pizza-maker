import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from '../models';
import { PizzaReducer } from '../../builder';

export const configureStore = () => {
  return createStore(
    combineReducers<AppState>({ reducer: PizzaReducer }),
    {},
    composeWithDevTools(),
  );
};
