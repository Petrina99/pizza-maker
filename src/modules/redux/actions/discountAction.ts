import { createAction } from '../../redux-store';
import { DiscountModel } from '../models';

export const DiscountAction = {
  add: (item: DiscountModel) => createAction('discount/add', item),
};
