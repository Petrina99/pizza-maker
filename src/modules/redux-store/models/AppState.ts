import { AuthReducer } from 'modules/authentication';
import { OrderReducer } from 'modules/order';

export interface AppState {
  orderReducer: ReturnType<typeof OrderReducer>;
  authReducer: ReturnType<typeof AuthReducer>;
}
