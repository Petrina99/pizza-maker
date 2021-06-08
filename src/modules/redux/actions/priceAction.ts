import { createAction } from '../../redux-store';

export const PriceAction = {
  add: (item: number) => createAction('price/add', item),
};
