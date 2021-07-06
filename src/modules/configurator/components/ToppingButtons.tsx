import React from 'react';

import { toppingArray } from '../const';

import { useDispatch, useSelector } from 'react-redux';
import { OrderAction } from 'modules/order/redux';

import { AppState } from 'modules/redux-store/models';

export const ToppingButtons: React.FC = () => {
  const dispatch = useDispatch();

  const { toppings } = useSelector((state: AppState) => state.orderReducer);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const { id } = e.currentTarget.dataset;

    if (id) {
      const currentId = toppings.find((item) => item.id === parseInt(id));
      if (!currentId) {
        dispatch(OrderAction.toppingsAdd({ title: value, id: parseInt(id) }));
      }

      if (currentId) {
        dispatch(OrderAction.toppingsRemove(parseInt(id)));
      }
    }
  };

  return (
    <div>
      {toppingArray.map((topping) => (
        <button
          data-id={topping.id}
          key={topping.id}
          value={topping.title}
          onClick={handleClick}
          name={topping.title}
          type='button'
        >
          <img src={topping.image} />
          {topping.title}
        </button>
      ))}
    </div>
  );
};
