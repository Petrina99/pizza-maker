import { PizzaReducer, UserReducer, ErrorReducer } from '../../redux';

export interface AppState {
  reducer: ReturnType<typeof PizzaReducer>;
  userReducer: ReturnType<typeof UserReducer>;
  errorReducer: ReturnType<typeof ErrorReducer>;
}
