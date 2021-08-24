import { createAction } from 'modules/redux-store';
import { DataModel, Topping } from './models';

export const OrderAction = {
  error: (item: string) => createAction('order/error', item),
  toppingsAdd: (item: Topping) => createAction('order/toppings', item),
  toppingsRemove: (id: number) => createAction('order/toppingsRemove', { id }),
  reset: () => createAction('order/reset'),
  update: (item: Partial<DataModel>) => createAction('order/update', item),
};
