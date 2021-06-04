import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { ErrorAction, UserAction } from '../redux';

export const useAuth = () => {
  const dispatch = useDispatch();

  const provider: firebase.auth.GoogleAuthProvider =
    new firebase.auth.GoogleAuthProvider();

  function register(email: string, pass: string) {
    firebase
      .app()
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch((err: firebase.FirebaseError) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
            return dispatch(ErrorAction.add('Email already in use.'));
          case 'auth/invalid-email':
            return dispatch(
              ErrorAction.add('Email that you have entered is not valid.'),
            );
          default:
            return;
        }
      });
  }

  function login(email: string, pass: string) {
    firebase
      .app()
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .catch((err: firebase.FirebaseError) => {
        switch (err.code) {
          case 'auth/wrong-password':
            return dispatch(ErrorAction.add('Wrong password. Try again.'));
          case 'auth/invalid-email':
            return dispatch(
              ErrorAction.add('Email that you have entered is invalid.'),
            );
          case 'auth/user-not-found':
            return dispatch(
              ErrorAction.add('User with this email does not exist.'),
            );
          default:
            return;
        }
      });
  }

  function signOut() {
    firebase.app().auth().signOut();
  }

  function authSubscription() {
    const subscription = firebase
      .app()
      .auth()
      .onAuthStateChanged(async (user) => {
        console.log({ user });
        if (!user) {
          dispatch(UserAction.add({ user }));
          console.log(user);
        }
        console.log(user?.email);
        dispatch(UserAction.add({ user }));
      });

    return () => {
      subscription();
    };
  }

  function rememberMe() {
    firebase.app().auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  }

  function googleSignIn() {
    firebase
      .app()
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user?.email);
      })
      .catch((err: firebase.FirebaseError) => {
        switch (err.code) {
          case 'auth/account-exists-with-different-credential':
            return dispatch(
              ErrorAction.add(
                'Account already exists with different credentials',
              ),
            );
          case 'auth/popup-blocked':
            return dispatch(ErrorAction.add('Popup blocked by the browser'));
          default:
            return;
        }
      });
  }
  return {
    register,
    login,
    signOut,
    googleSignIn,
    authSubscription,
    rememberMe,
  };
};
