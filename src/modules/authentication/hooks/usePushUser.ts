import firebase from 'firebase/app';

export const usePushUser = () => {
  function getCollection() {
    return firebase.app().firestore().collection('users');
  }

  function pushUser(name: string, data: firebase.firestore.DocumentData) {
    getCollection().doc(name).set(data);
  }

  return {
    pushUser,
  };
};
