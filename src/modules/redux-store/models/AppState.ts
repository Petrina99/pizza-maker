import { PizzaReducer } from '../../builder';

export interface AppState {
  reducer: ReturnType<typeof PizzaReducer>;
}
