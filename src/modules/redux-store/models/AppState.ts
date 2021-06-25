import { AuthReducer, OrderReducer } from 'modules';

export interface AppState {
  orderReducer: ReturnType<typeof OrderReducer>;
  authReducer: ReturnType<typeof AuthReducer>;
}
