import { createAction } from '../../redux-store';
import { Topping } from '../models';

export const Actions = {
  add: (item: Topping) => createAction('topping/add', item),
  remove: (id: number) => createAction('topping/remove', { id }),
};
