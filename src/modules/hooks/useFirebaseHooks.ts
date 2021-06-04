import firebase from 'firebase/app';

export const useFirebaseHooks = (collectionId: string) => {
  function getCollectionRefrence() {
    return firebase.app().firestore().collection(collectionId);
  }

  function pushUser(name: string) {
    getCollectionRefrence().doc(name);
  }

  async function getSpecificUser(name: string) {
    const resultPromise = await getCollectionRefrence()
      .where('email', '==', name)
      .get();

    if (!resultPromise) {
      return false;
    }

    return true;
  }

  async function getAllUsers() {
    const resultPromise = await getCollectionRefrence().get();
    const resolvedItems = resultPromise.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return resolvedItems;
  }

  return {
    getCollectionRefrence,
    pushUser,
    getAllUsers,
    getSpecificUser,
  };
};
