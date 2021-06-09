import React from 'react';

import {
  ToppingSelector,
  Discount,
  Finisher,
  PizzaSize,
  Header,
} from '../../modules';
export const PizzaMaker: React.FC = () => {
  return (
    <div className='builder'>
      <Header />
      <ToppingSelector />
      <PizzaSize />
      <Discount />
      <Finisher />
    </div>
  );
};
