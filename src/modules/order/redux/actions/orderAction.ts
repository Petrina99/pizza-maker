import { createAction } from 'modules/redux-store';

export const OrderAction = {
  error: (item: string) => createAction('order/error', item),
  quantity: (item: number) => createAction('order/quantity', item),
  discount: (item: boolean) => createAction('order/discount', item),
  size: (item: string) => createAction('order/size', item),
  address: (item: string | null) => createAction('order/address', item),
  city: (item: string | null) => createAction('order/city', item),
  country: (item: string | null) => createAction('order/country', item),
  postalCode: (item: number) => createAction('order/postalCode', item),
  payment: (item: string) => createAction('order/payment', item),
  ccNumber: (item: number) => createAction('order/ccNumber', item),
  reset: () => createAction('order/reset'),
};
