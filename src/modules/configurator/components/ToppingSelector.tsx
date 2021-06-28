import React from 'react';

import { ToppingButtons } from './ToppingButtons';

export const ToppingSelector: React.FC = () => {
  return (
    <div className='topping-div'>
      <p className='title'>Toppings! Toppings!</p>
      <div className='topping-selector'>
        <ToppingButtons />
      </div>
      <p className='price-par'>Total price +$3.00</p>
    </div>
  );
};
