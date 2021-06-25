import { createAction } from 'modules/redux-store';

import firebase from 'firebase/app';

interface State {
  user: firebase.User | null;
  loading: boolean;
  error?: string;
}

export const AuthAction = {
  add: (item: State) => createAction('user/add', item),
  error: (item: string) => createAction('user/error', item),
};
