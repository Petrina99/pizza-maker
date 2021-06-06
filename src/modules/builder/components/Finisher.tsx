import React, { useState } from 'react';

import pizza from '../../../images/pizza.svg';

import { useSelector } from 'react-redux';
import { AppState } from '../../redux-store';

export const Finisher: React.FC = () => {
  const { toppings } = useSelector((state: AppState) => state.reducer);
  const { size } = useSelector((state: AppState) => state.sizeReducer);

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);

  const handlePrice = () => {
    const priceRef = 3;
    const toppingsPrice = toppings.length;

    if (size === 'S') {
      setSizePrice(1);
    }

    if (size === 'M') {
      setSizePrice(2);
    }

    if (size === 'L') {
      setSizePrice(3);
    }

    const pizza = toppingsPrice === 0 ? priceRef : priceRef + toppingsPrice;
    const pizzaSize = pizza * sizePrice;
    const finalPrice = pizzaSize * quantity;

    setPrice(Math.floor(finalPrice));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value) {
      setQuantity(parseInt(value));
    }

    if (value === '0') {
      setQuantity(0);
    }

    handlePrice();
  };

  return (
    <>
      <div>
        <img src={pizza} />
        <input type='number' onChange={handleChange} min='0' />
        <p>QTY</p>
        <p>${price}</p>
        <p>ORDER TOTAL</p>
      </div>
    </>
  );
};
