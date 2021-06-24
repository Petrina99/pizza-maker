import { createAction } from 'modules/redux-store';
import { Topping } from '../models';

export const ToppingAction = {
  add: (item: Topping) => createAction('topping/add', item),
  remove: (id: number) => createAction('topping/remove', { id }),
  reset: () => createAction('topping/reset'),
};
