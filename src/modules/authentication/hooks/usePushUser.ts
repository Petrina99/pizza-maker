import firebase from 'firebase/app';

export const usePushUser = () => {
  function getCollection() {
    return firebase.app().firestore().collection('users');
  }

  function pushUser<D>(name: string, data: D) {
    getCollection().doc(name).set(data);
  }

  return {
    pushUser,
  };
};
