import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux-store';
import { ErrorAction } from '../../builder';

import firebase from 'firebase/app';
export const FirebaseAuthProvider: React.FC = ({ children }) => {
  const { users } = useSelector((state: AppState) => state.userReducer);
  const { buttons } = useSelector((state: AppState) => state.buttonReducer);

  const dispatch = useDispatch();

  const [user, setUser] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [authButton, setAuthButton] = useState(false);
  const [logoutButton, setLogoutButton] = useState(false);

  function setInfo() {
    if (users.length && users[users.length - 1].email) {
      setEmail(users[users.length - 1].email);
      setPass(users[users.length - 1].password);
      setIsRegistered(users[users.length - 1].hasAccount);
    }
  }

  useEffect(() => {
    setInfo();
  }, [users.length]);

  function handleButton() {
    if (buttons.length && buttons[buttons.length - 1].type === 'register') {
      setAuthButton(true);
    }

    if (buttons.length && buttons[buttons.length - 1].type === 'logout') {
      setLogoutButton(true);
    }
  }

  useEffect(() => {
    handleButton();
  }, [buttons.length]);

  function createUser() {
    return firebase
      .app()
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch((err: firebase.FirebaseError) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
            return dispatch(
              ErrorAction.add({ error: err.message, type: 'register' }),
            );
          case 'auth/invalid-email':
            return dispatch(
              ErrorAction.add({ error: err.message, type: 'register' }),
            );
          default:
            return;
        }
      });
  }

  function signIn() {
    return firebase
      .app()
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .catch((err: firebase.FirebaseError) => {
        switch (err.code) {
          case 'auth/wrong-password':
            return dispatch(
              ErrorAction.add({ error: err.message, type: 'login' }),
            );
          case 'auth/invalid-email':
            return dispatch(
              ErrorAction.add({ error: err.message, type: 'login' }),
            );
          case 'auth/user-not-found':
            return dispatch(
              ErrorAction.add({ error: err.message, type: 'login' }),
            );
          default:
            return;
        }
      });
  }

  function authListener() {
    firebase
      .app()
      .auth()
      .onAuthStateChanged(async (user) => {
        console.log({ user });
        if (!user) {
          setLogoutButton(false);
          console.log(logoutButton);
          return;
        }
        console.log({ user: user.toJSON() });
        setUser(true);
      });
  }

  useEffect(() => {
    authListener();
    console.log(user);
  }, []);

  useEffect(() => {
    if (isRegistered && email && pass) {
      signIn();
    }
    if (!isRegistered && email && pass) {
      createUser();
    }

    return;
  }, [authButton]);

  return <>{children}</>;
};
