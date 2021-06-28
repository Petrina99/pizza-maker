import React from 'react';

import {
  Chilli,
  Corn,
  Egg,
  Pineapple,
  Meat,
  Shrooms,
  Bacon,
} from '../const';

export const ToppingSelector: React.FC = () => {
  return (
    <div className='topping-div'>
      <p className='title'>Toppings! Toppings!</p>
      <div className='topping-selector'>
        <Chilli />
        <Corn />
        <Egg />
        <Pineapple />
        <Meat />
        <Shrooms />
        <Bacon />
      </div>
      <p className='price-par'>Total price +$3.00</p>
    </div>
  );
};
