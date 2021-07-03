import { createAction } from 'modules/redux-store';
import { Topping } from './models';

export const OrderAction = {
  error: (item: string) => createAction('order/error', item),
  quantity: (item: number) => createAction('order/quantity', item),
  discount: (item: boolean) => createAction('order/discount', item),
  size: (item: string) => createAction('order/size', item),
  sizePrice: () => createAction('order/sizePrice'),
  address: (item: string | null) => createAction('order/address', item),
  city: (item: string | null) => createAction('order/city', item),
  country: (item: string | null) => createAction('order/country', item),
  postalCode: (item: number) => createAction('order/postalCode', item),
  payment: (item: string) => createAction('order/payment', item),
  ccNumber: (item: number) => createAction('order/ccNumber', item),
  toppingsAdd: (item: Topping) => createAction('order/toppings', item),
  toppingsRemove: (id: number) => createAction('order/toppingsRemove', { id }),
  reset: () => createAction('order/reset'),
};
