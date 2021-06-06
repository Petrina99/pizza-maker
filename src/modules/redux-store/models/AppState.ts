import {
  PizzaReducer,
  UserReducer,
  ErrorReducer,
  MessageReducer,
  SizeReducer,
} from '../../redux';

export interface AppState {
  reducer: ReturnType<typeof PizzaReducer>;
  userReducer: ReturnType<typeof UserReducer>;
  errorReducer: ReturnType<typeof ErrorReducer>;
  messageReducer: ReturnType<typeof MessageReducer>;
  sizeReducer: ReturnType<typeof SizeReducer>;
}
