import { ActionUnion } from '../../redux-store';
import { ButtonAction } from './buttonAction';
import { Button } from '../models';

interface State {
  buttons: Button[];
}

const INITIAL_STATE: State = {
  buttons: [],
};

export const ButtonReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof ButtonAction>,
) => {
  switch (action.type) {
    case 'button/add':
      return {
        ...state,
        buttons: [...state.buttons, action.payload],
      };
    default:
      return state;
  }
};
