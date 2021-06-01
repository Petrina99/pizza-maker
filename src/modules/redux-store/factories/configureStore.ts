import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from '../models';
import {
  PizzaReducer,
  UserReducer,
  ErrorReducer,
  ButtonReducer,
} from '../../builder';

export const configureStore = () => {
  return createStore(
    combineReducers<AppState>({
      reducer: PizzaReducer,
      userReducer: UserReducer,
      errorReducer: ErrorReducer,
      buttonReducer: ButtonReducer,
    }),
    {},
    composeWithDevTools(),
  );
};
