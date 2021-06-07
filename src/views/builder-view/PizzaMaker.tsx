import React from 'react';

import { ToppingSelector, Discount, Finisher, PizzaSize } from '../../modules';
export const PizzaMaker: React.FC = () => {
  return (
    <>
      <ToppingSelector />
      <PizzaSize />
      <Discount />
      <Finisher />
    </>
  );
};
