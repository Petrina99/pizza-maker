import {
  PizzaReducer,
  UserReducer,
  ErrorReducer,
  ButtonReducer,
} from '../../builder';

export interface AppState {
  reducer: ReturnType<typeof PizzaReducer>;
  userReducer: ReturnType<typeof UserReducer>;
  errorReducer: ReturnType<typeof ErrorReducer>;
  buttonReducer: ReturnType<typeof ButtonReducer>;
}
