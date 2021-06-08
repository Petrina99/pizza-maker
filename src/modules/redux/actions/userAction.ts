import { createAction } from '../../redux-store';
import { UserModel } from '../models';

export const UserAction = {
  add: (item: UserModel) => createAction('user/add', item),
};
