import { createAction } from '../../redux-store';

export const UserAction = {
  add: (item: string | null) => createAction('user/add', item),
};
