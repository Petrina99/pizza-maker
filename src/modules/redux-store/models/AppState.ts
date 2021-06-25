import { AuthReducer, OrderReducer, ToppingReducer } from 'modules';

export interface AppState {
  orderReducer: ReturnType<typeof OrderReducer>;
  toppingReducer: ReturnType<typeof ToppingReducer>;
  authReducer: ReturnType<typeof AuthReducer>;
}
