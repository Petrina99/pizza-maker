import firebase from 'firebase/app';

export const useFirebaseHook = (collectionId: string) => {
  function getCollectionRefrence() {
    return firebase.app().firestore().collection(collectionId);
  }

  function pushData(data: any) {
    getCollectionRefrence().add(data);
  }

  async function getData() {
    const resultPromise = await getCollectionRefrence()
      .where('description', '==', 'test')
      .get();

    const resolvedItems = resultPromise.docs.map((doc) => {
      return doc.id, doc.data();
    });

    return resolvedItems;
  }

  return {
    getCollectionRefrence,
    pushData,
    getData,
  };
};
