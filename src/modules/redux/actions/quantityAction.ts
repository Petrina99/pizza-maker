import { createAction } from '../../redux-store';

export const QuantityAction = {
  add: (item: number) => createAction('qty/add', item),
};
