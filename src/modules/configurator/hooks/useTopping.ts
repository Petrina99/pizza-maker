import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { OrderAction } from 'modules/order/redux';

import { AppState } from 'modules/redux-store';

export const useTopping = () => {
  const dispatch = useDispatch();
  const { toppings } = useSelector((state: AppState) => state.orderReducer);

  const [chilli, setChilli] = useState(false);
  const [corn, setCorn] = useState(false);
  const [egg, setEgg] = useState(false);
  const [pineapple, setPineapple] = useState(false);
  const [meat, setMeat] = useState(false);
  const [shrooms, setShrooms] = useState(false);
  const [bacon, setBacon] = useState(false);

  const handleTopping = (value: string, id: number) => {
    if (id) {
      const currentId = toppings.find((item) => item.id == id);
      if (!currentId) {
        dispatch(
          OrderAction.toppingsAdd({
            title: value,
            id: id,
          }),
        );

        switch (value) {
          case 'Chilli':
            setChilli(true);
            break;
          case 'Corn':
            setCorn(true);
            break;
          case 'Egg':
            setEgg(true);
            break;
          case 'Pineapple':
            setPineapple(true);
            break;
          case 'Meat':
            setMeat(true);
            break;
          case 'Shrooms':
            setShrooms(true);
            break;
          case 'Bacon':
            setBacon(true);
            break;
          default:
            return;
        }
      }

      if (currentId) {
        dispatch(OrderAction.toppingsRemove(id));
        switch (value) {
          case 'Chilli':
            setChilli(false);
            break;
          case 'Corn':
            setCorn(false);
            break;
          case 'Egg':
            setEgg(false);
            break;
          case 'Pineapple':
            setPineapple(false);
            break;
          case 'Meat':
            setMeat(false);
            break;
          case 'Shrooms':
            setShrooms(false);
            break;
          case 'Bacon':
            setBacon(false);
            break;
          default:
            return;
        }
      }
    }
  };

  return {
    handleTopping,
    bacon,
    chilli,
    meat,
    corn,
    egg,
    pineapple,
    shrooms,
  };
};
