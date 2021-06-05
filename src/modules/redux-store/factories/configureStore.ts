import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from '../models';
import {
  PizzaReducer,
  UserReducer,
  ErrorReducer,
  MessageReducer,
} from '../../redux';

export const configureStore = () => {
  return createStore(
    combineReducers<AppState>({
      reducer: PizzaReducer,
      userReducer: UserReducer,
      errorReducer: ErrorReducer,
      messageReducer: MessageReducer,
    }),
    {},
    composeWithDevTools(),
  );
};
