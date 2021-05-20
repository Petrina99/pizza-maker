import { createAction } from '../../redux-store';
import { User } from '../models';

export const UserAction = {
  add: (item: User) => createAction('user/add', item),
  remove: (id: number) => createAction('user/remove', { id }),
};
