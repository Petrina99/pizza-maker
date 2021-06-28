import React from 'react';

import { toppings } from '../const';

import { useDispatch } from 'react-redux';
import { OrderAction } from 'modules/order/redux';

import chilli from 'images/chilli.svg';
import corn from 'images/corn.svg';
import meat from 'images/meat.svg';
import pineapple from 'images/pineapple.svg';
import bacon from 'images/bacon.svg';
import egg from 'images/egg.svg';
import shrooms from 'images/shrooms.svg';

export const ToppingButtons: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const { id, active } = e.currentTarget.dataset;

    if (active === 'false') {
      dispatch(
        OrderAction.toppingsAdd({
          title: value,
          id: id ? parseInt(id) : 8,
        }),
      );
    }

    if (active == 'true') {
      dispatch(OrderAction.toppingsRemove(id ? parseInt(id) : 8));
    }
  };

  return (
    <div>
      <button
        data-id={toppings[0].id}
        value={toppings[0].title}
        onClick={handleClick}
        name='chilli'
        type='button'
      >
        <img src={chilli} />
        {toppings[0].title}
      </button>
      <button
        data-id={toppings[1].id}
        value={toppings[1].title}
        onClick={handleClick}
        name='corn'
        type='button'
      >
        <img src={corn} />
        {toppings[1].title}
      </button>
      <button
        data-id={toppings[2].id}
        value={toppings[2].title}
        onClick={handleClick}
        name='egg'
        type='button'
      >
        <img src={egg} />
        {toppings[2].title}
      </button>
      <button
        data-id={toppings[3].id}
        value={toppings[3].title}
        onClick={handleClick}
        name='pineapple'
        type='button'
      >
        <img src={pineapple} />
        {toppings[3].title}
      </button>
      <button
        data-id={toppings[4].id}
        value={toppings[4].title}
        onClick={handleClick}
        name='meat'
        type='button'
      >
        <img src={meat} />
        {toppings[4].title}
      </button>
      <button
        data-id={toppings[5].id}
        value={toppings[5].title}
        onClick={handleClick}
        name='shrooms'
        type='button'
      >
        <img src={shrooms} />
        {toppings[5].title}
      </button>
      <button
        data-id={toppings[6].id}
        value={toppings[6].title}
        onClick={handleClick}
        name='bacon'
        type='button'
      >
        <img src={bacon} />
        {toppings[6].title}
      </button>
    </div>
  );
};
