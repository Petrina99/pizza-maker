import firebase from 'firebase';

export interface AuthState {
  user: firebase.User | firebase.auth.UserCredential | null;
  loading: boolean;
  error?: string;
}
