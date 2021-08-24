import React from 'react';

import { ToppingButtons } from './ToppingButtons';

import style from '../styles/toppings.module.css';

export const ToppingSelector: React.FC = () => {
  return (
    <section className={style.toppingSection}>
      <p className={style.toppingTitle}>Toppings! Toppings!</p>
      <ToppingButtons />
      <p className={style.price}>Total price +$3.00</p>
    </section>
  );
};
