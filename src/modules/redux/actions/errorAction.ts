import { createAction } from '../../redux-store';

export const ErrorAction = {
  add: (item: string) => createAction('error/add', item),
};
