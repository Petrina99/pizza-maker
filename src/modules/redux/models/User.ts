import firebase from 'firebase';

export interface User {
  user: firebase.User | undefined | string;
}
