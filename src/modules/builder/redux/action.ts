import { createAction } from '../../redux-store';
import { Topping } from '../models';

export const Actions = {
  add: (item: Topping) => createAction('type/add', item),
  remove: (id: number) => createAction('type/remove', { id }),
};
