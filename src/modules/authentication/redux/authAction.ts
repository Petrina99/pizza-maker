import { createAction } from 'modules/redux-store';

import firebase from 'firebase/app';

export const AuthAction = {
  add: (item: firebase.User | null) => createAction('user/add', item),
  error: (item: string) => createAction('user/error', item),
  loading: () => createAction('user/loading'),
};
