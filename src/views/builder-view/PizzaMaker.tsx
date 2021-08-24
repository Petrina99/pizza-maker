import React from 'react';

import {
  ToppingSelector,
  DiscountInput,
  Finisher,
  PizzaSize,
  Header,
} from 'modules/configurator/components';

import style from './styles/builder.module.css';

export const PizzaMaker: React.FC = () => {
  return (
    <div className={style.builder}>
      <Header />
      <ToppingSelector />
      <PizzaSize />
      <DiscountInput />
      <Finisher />
    </div>
  );
};
