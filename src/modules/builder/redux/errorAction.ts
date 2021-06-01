import { createAction } from '../../redux-store';
import { Error } from '../models';

export const ErrorAction = {
  add: (item: Error) => createAction('error/add', item),
};
