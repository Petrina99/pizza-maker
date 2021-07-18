import { createAction } from 'modules/redux-store';
import { Topping } from './models';

export const OrderAction = {
  error: (item: string) => createAction('order/error', item),
  quantity: (item: number) => createAction('order/quantity', item),
  discount: (item: boolean) => createAction('order/discount', item),
  size: (item: string) => createAction('order/size', item),
  payment: (item: string) => createAction('order/payment', item),
  ccNumber: (item: number) => createAction('order/ccNumber', item),
  toppingsAdd: (item: Topping) => createAction('order/toppings', item),
  toppingsRemove: (id: number) => createAction('order/toppingsRemove', { id }),
  reset: () => createAction('order/reset'),
};
