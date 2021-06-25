import { ActionUnion } from 'modules/redux-store';
import { AuthAction } from './authAction';

import firebase from 'firebase/app';

interface State {
  user: firebase.User | null;
  loading: boolean;
  error?: string;
}

const INITIAL_STATE: State = {
  user: null,
  loading: true,
  error: undefined,
};

export const AuthReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof AuthAction>,
) => {
  switch (action.type) {
    case 'user/error':
      return {
        ...state,
        error: action.payload,
      };
    case 'user/add':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
