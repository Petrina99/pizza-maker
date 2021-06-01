import { ActionUnion } from '../../redux-store';
import { Error } from '../models';
import { ErrorAction } from './errorAction';

interface State {
  errors: Error[];
}

const INITIAL_STATE: State = {
  errors: [],
};

export const ErrorReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof ErrorAction>,
) => {
  switch (action.type) {
    case 'error/add':
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    default:
      return state;
  }
};
