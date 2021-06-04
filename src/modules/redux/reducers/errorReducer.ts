import { ActionUnion } from '../../redux-store';
import { ErrorAction } from '../actions';

interface State {
  error: string;
}

const INITIAL_STATE: State = {
  error: '',
};

export const ErrorReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof ErrorAction>,
) => {
  switch (action.type) {
    case 'error/add':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
