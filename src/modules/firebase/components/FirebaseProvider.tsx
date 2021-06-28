import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';

import { useAuth } from 'modules/firebase/hooks';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

export const FirebaseProvider: React.FC = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const { authSubscription } = useAuth();

  function initFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
      });
    }

    setIsReady(true);
  }

  useEffect(() => {
    initFirebase();
    authSubscription();
  }, []);

  if (!isReady) {
    return <>Loading...</>;
  }

  return <>{children}</>;
};
