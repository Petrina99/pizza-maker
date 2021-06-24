import firebase from 'firebase/app';
export interface AuthState {
  user: firebase.User | null | firebase.auth.UserCredential;
  loading: boolean;
  error?: string;
}
