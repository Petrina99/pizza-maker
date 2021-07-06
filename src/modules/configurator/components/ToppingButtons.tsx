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
      <button
        data-id={toppingArray[0].id}
        value={toppingArray[0].title}
        onClick={handleClick}
        name='chilli'
        type='button'
      >
        <img src={toppingArray[0].image} />
        {toppingArray[0].title}
      </button>
      <button
        data-id={toppingArray[1].id}
        value={toppingArray[1].title}
        onClick={handleClick}
        name='corn'
        type='button'
      >
        <img src={toppingArray[1].image} />
        {toppingArray[1].title}
      </button>
      <button
        data-id={toppingArray[2].id}
        value={toppingArray[2].title}
        onClick={handleClick}
        name='egg'
        type='button'
      >
        <img src={toppingArray[2].image} />
        {toppingArray[2].title}
      </button>
      <button
        data-id={toppingArray[3].id}
        value={toppingArray[3].title}
        onClick={handleClick}
        name='pineapple'
        type='button'
      >
        <img src={toppingArray[4].image} />
        {toppingArray[3].title}
      </button>
      <button
        data-id={toppingArray[4].id}
        value={toppingArray[4].title}
        onClick={handleClick}
        name='meat'
        type='button'
      >
        <img src={toppingArray[5].image} />
        {toppingArray[4].title}
      </button>
      <button
        data-id={toppingArray[5].id}
        value={toppingArray[5].title}
        onClick={handleClick}
        name='shrooms'
        type='button'
      >
        <img src={toppingArray[6].image} />
        {toppingArray[5].title}
      </button>
      <button
        data-id={toppingArray[6].id}
        value={toppingArray[6].title}
        onClick={handleClick}
        name='bacon'
        type='button'
      >
        <img src={toppingArray[6].image} />
        {toppingArray[6].title}
      </button>
    </div>
  );
};
