import React, { useEffect } from 'react';

import firebase from 'firebase/app';

import { useSelector } from 'react-redux';
import { AppState } from '../../redux-store';
import { useFirebaseHooks } from '../hooks';

export const FirebaseAuthProvider: React.FC = ({ children }) => {
  const user = useSelector((state: AppState) => state.userReducer);
  const { email, password } = user[0];

  const { getSpecificUser, pushUser } = useFirebaseHooks('users');

  useEffect(() => {
    getSpecificUser(email);
  }, []);

  const isValid = Boolean(getSpecificUser(email));

  if (!isValid) {
    pushUser(email, user);
  }

  useEffect(() => {
    firebase
      .app()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((_user) => {
        console.log(_user);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <>{children}</>;
};
