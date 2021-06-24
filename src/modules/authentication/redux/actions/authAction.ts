import { createAction } from 'modules/redux-store';
import { AuthModel, GoogleSignInModel } from '../models';

export const AuthAction = {
  add: (item: AuthModel) => createAction('user/add', item),
  error: (item: string | null) => createAction('user/error', item),
  googleSignIn: (item: GoogleSignInModel) =>
    createAction('user/googleSignIn', item),
  googleError: (item: string | null) => createAction('user/googleError', item),
  passwordReset: (item: string | null) =>
    createAction('user/passwordReset', item),
};
