import React from 'react';

import {
  ToppingSelector,
  DiscountInput,
  Finisher,
  PizzaSize,
  Header,
} from 'modules/configurator/components';
export const PizzaMaker: React.FC = () => {
  return (
    <div className='builder'>
      <Header />
      <ToppingSelector />
      <PizzaSize />
      <DiscountInput />
      <Finisher />
    </div>
  );
};
