import firebase from 'firebase/app';
export interface AuthState {
  user: firebase.User | null | firebase.auth.AuthCredential;
  loading: boolean;
  error?: string;
}
