import { createAction } from 'modules/redux-store';
import { AuthModel } from '../models';

export const AuthAction = {
  add: (item: AuthModel) => createAction('user/add', item),
  error: (item: string) => createAction('user/error', item),
};
