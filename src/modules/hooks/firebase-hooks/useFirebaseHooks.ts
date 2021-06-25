import firebase from 'firebase/app';

export const useFirebaseHooks = (collectionId: string) => {
  function getCollectionReference() {
    return firebase.app().firestore().collection(collectionId);
  }

  function pushUser(name: string, data: firebase.firestore.DocumentData) {
    getCollectionReference().doc(name).set(data);
  }

  function pushOrder(data: firebase.firestore.DocumentData) {
    getCollectionReference().doc().set(data);
  }

  /* not sure what to do with these 2 but will keep them if i need them */
  async function getSpecific(name: string) {
    const resultPromise = await getCollectionReference()
      .where('email', '==', name)
      .get();

    if (!resultPromise) {
      return false;
    }

    return true;
  }

  async function getAll() {
    const resultPromise = await getCollectionReference().get();
    const resolvedItems = resultPromise.docs.map((doc) => {
      return doc.data();
    });

    return resolvedItems;
  }

  return {
    getCollectionReference,
    pushUser,
    getAll,
    getSpecific,
    pushOrder,
  };
};
