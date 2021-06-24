import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from '../models';
import { AuthReducer, OrderReducer, ToppingReducer } from 'modules';

export const configureStore = () => {
  return createStore(
    combineReducers<AppState>({
      authReducer: AuthReducer,
      toppingReducer: ToppingReducer,
      orderReducer: OrderReducer,
    }),
    {},
    composeWithDevTools(),
  );
};
