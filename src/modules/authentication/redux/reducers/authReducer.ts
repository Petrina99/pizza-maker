import { ActionUnion } from 'modules/redux-store';
import { AuthAction } from '../actions';
import { AuthModel, GoogleSignInModel } from '../models';

interface State {
  user: AuthModel;
  error: string | null;
  googleSignIn: GoogleSignInModel;
  googleError: string | null;
  passwordReset: string | null;
}

const INITIAL_STATE: State = {
  user: {
    email: null,
  },
  error: null,
  googleSignIn: {
    message: null,
  },
  googleError: null,
  passwordReset: null,
};

export const AuthReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof AuthAction>,
) => {
  switch (action.type) {
    case 'user/add':
      return {
        ...state,
        user: action.payload,
      };
    case 'user/error':
      return {
        ...state,
        error: action.payload,
      };
    case 'user/googleSignIn':
      return {
        ...state,
        googleSignIn: action.payload,
      };
    case 'user/googleError':
      return {
        ...state,
        googleError: action.payload,
      };
    case 'user/passwordReset':
      return {
        ...state,
        passwordReset: action.payload,
      };
    default:
      return state;
  }
};
