import { createAction } from 'modules/redux-store';
import { AuthState } from '../models';

export const AuthAction = {
  add: (item: AuthState) => createAction('user/add', item),
  error: (item: string) => createAction('user/error', item),
};
