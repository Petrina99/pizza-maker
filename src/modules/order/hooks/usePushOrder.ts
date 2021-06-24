import firebase from 'firebase/app';

export const usePushOrder = (collectionId: string) => {
  function getCollectionReference() {
    return firebase.app().firestore().collection(collectionId);
  }
  function pushOrder(data: any) {
    getCollectionReference().doc().set(data);
  }

  return {
    pushOrder,
  };
};
