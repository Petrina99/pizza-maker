import { AuthReducer, OrderReducer, ToppingReducer } from 'modules';

export interface AppState {
  authReducer: ReturnType<typeof AuthReducer>;
  orderReducer: ReturnType<typeof OrderReducer>;
  toppingReducer: ReturnType<typeof ToppingReducer>;
}
