import firebase from 'firebase/app';

export const useFirebaseHooks = (collectionId: string) => {
  function getCollectionRefrence() {
    return firebase.app().firestore().collection(collectionId);
  }

  function pushUser(name: string, data: any) {
    getCollectionRefrence().doc(name).set(data);
  }

  function pushOrder(name: string, data: any) {
    getCollectionRefrence().doc(name).update(data);
  }

  /* not sure what to do with these 2 but will keep them if i need them */
  async function getSpecific(name: string) {
    const resultPromise = await getCollectionRefrence()
      .where('email', '==', name)
      .get();

    if (!resultPromise) {
      return false;
    }

    return true;
  }

  async function getAll() {
    const resultPromise = await getCollectionRefrence().get();
    const result = resultPromise.docs.map((doc) => {
      return doc.data();
    });
    return result;
  }

  return {
    getCollectionRefrence,
    pushUser,
    getAll,
    getSpecific,
    pushOrder,
  };
};
