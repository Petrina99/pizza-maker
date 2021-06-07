import React, { useState } from 'react';

import pizza from '../../../images/pizza.svg';

import { useSelector } from 'react-redux';
import { AppState } from '../../redux-store';

export const Finisher: React.FC = () => {
  const { toppings } = useSelector((state: AppState) => state.reducer);
  const { size } = useSelector((state: AppState) => state.sizeReducer);
  const { discount } = useSelector((state: AppState) => state.discountReducer);

  console.log(discount);
  const discountReduce = discount ? 0.25 : 1;

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const [message, setMessage] = useState('');

  const handlePrice = () => {
    if (quantity !== 0) {
      const startingPrice = 3;
      const toppingPrice = toppings.length;

      if (size === 'S') {
        setSizePrice(1);
      }

      if (size === 'M') {
        setSizePrice(4);
      }

      if (size === 'L') {
        setSizePrice(7);
      }

      const priceWithoutDiscount =
        (startingPrice + toppingPrice + sizePrice) * quantity;
      const discountNumber = priceWithoutDiscount * discountReduce;
      setPrice(priceWithoutDiscount - discountNumber);
    }

    if (quantity === 0) {
      setMessage('Please select the number of pizzas you want.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.currentTarget;

    if (valueAsNumber !== 0) {
      setQuantity(valueAsNumber);
    }

    if (valueAsNumber === 0) {
      setQuantity(0);
    }

    handlePrice();
  };

  return (
    <>
      <div>
        <img src={pizza} />
        <br />
        <input type='number' onChange={handleChange} value={quantity} />
        <button type='button' onClick={handlePrice}>
          Check price
        </button>
        <p>QTY</p>
        <p>{message}</p>
        <p>${price}</p>
        <p>ORDER TOTAL</p>
      </div>
    </>
  );
};
