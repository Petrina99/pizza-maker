import firebase from 'firebase/app';

export const useOrderPush = () => {
  const pushOrder = (data: any) => {
    firebase.app().firestore().collection('orders').doc().set(data);
  };

  return {
    pushOrder,
  };
};
