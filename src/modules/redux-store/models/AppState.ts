import { PizzaReducer, UserReducer } from '../../builder';

export interface AppState {
  reducer: ReturnType<typeof PizzaReducer>;
  userReducer: ReturnType<typeof UserReducer>;
}
