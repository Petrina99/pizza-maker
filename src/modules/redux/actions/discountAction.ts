import { createAction } from '../../redux-store';

export const DiscountAction = {
  add: (item: boolean) => createAction('discount/add', item),
};
