import { createAction } from '../../redux-store';

export const SizeAction = {
  add: (item: string) => createAction('size/add', item),
};
