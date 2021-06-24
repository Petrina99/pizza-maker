import firebase from 'firebase';

export interface AuthState {
  user: firebase.User | undefined;
  loading: boolean;
  error?: string;
}
