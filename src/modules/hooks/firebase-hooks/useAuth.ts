import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { ErrorAction, UserAction, MessageAction } from '../../redux';

export const useAuth = () => {
  const dispatch = useDispatch();

  /* provider for google sign in with popup */
  const provider: firebase.auth.GoogleAuthProvider =
    new firebase.auth.GoogleAuthProvider();

  /* catching errors and pushing them to errorReducer in all components */
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

  /* listener that listens to all changes in firebase auth if user doesnt exist it returns null 
  dispatching the user to redux */
  function authSubscription() {
    const subscription = firebase
      .app()
      .auth()
      .onAuthStateChanged(async (user) => {
        console.log({ user });
        if (!user) {
          dispatch(UserAction.add({ user: '' }));
        }

        if (user) {
          dispatch(UserAction.add({ user: user }));
        }
      });

    return () => {
      subscription();
    };
  }

  /* not sure if i should put LOCAL or SESSION, for now its local and works fine */
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

  /* sends a reset password link to an email + added a reducer just for this message */
  function resetPassword(email: string) {
    firebase
      .app()
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch(
          MessageAction.add(
            `A link for your password reset has been sent to your email.`,
          ),
        );
      })
      .catch((err: firebase.FirebaseError) => {
        switch (err.code) {
          case 'auth/invalid-email':
            return dispatch(
              ErrorAction.add(
                'Email address that you have entered is not valid.',
              ),
            );
          case 'auth/user-not-found':
            return dispatch(
              ErrorAction.add(
                'There is no user corresponding to the email adress',
              ),
            );
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
    resetPassword,
  };
};
