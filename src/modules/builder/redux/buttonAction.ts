import { createAction } from '../../redux-store';
import { Button } from '../models';

export const ButtonAction = {
  add: (button: Button) => createAction('button/add', button),
};
