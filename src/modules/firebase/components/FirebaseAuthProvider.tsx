import React, { useEffect } from 'react';
import firebase from 'firebase/app';

export const FirebaseAuthProvider: React.FC = ({ children }) => {
  useEffect(() => {
    firebase
      .app()
      .auth()
      .createUserWithEmailAndPassword('petrinamislav@gmail.com', '12345678')
      .then((_user) => {
        console.log(_user);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <>{children}</>;
};
