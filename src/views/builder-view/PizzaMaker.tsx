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
    <>
      <Header />
      <ToppingSelector />
      <PizzaSize />
      <Discount />
      <Finisher />
    </>
  );
};
