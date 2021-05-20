import firebase from 'firebase';
import { useEffect } from 'react';

export function useAuthSubsription() {
  useEffect(() => {
    const subscription = firebase
      .app()
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          return;
        }

        console.log({ user: user.toJSON() });
        // akcija nakon uspjesnog logina ovde
      });

    return () => {
      subscription();
    };
  });
}
