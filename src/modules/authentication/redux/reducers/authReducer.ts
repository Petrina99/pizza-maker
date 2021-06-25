import { ActionUnion } from 'modules/redux-store';
import { AuthAction } from '../actions';
import { AuthModel } from '../models';

const INITIAL_STATE: AuthModel = {
  user: null,
  loading: true,
  error: '',
};

export const AuthReducer = (
  state: AuthModel = INITIAL_STATE,
  action: ActionUnion<typeof AuthAction>,
) => {
  switch (action.type) {
    case 'user/add':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'user/error':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
