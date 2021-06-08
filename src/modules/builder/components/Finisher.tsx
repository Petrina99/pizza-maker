import React, { useState } from 'react';

import pizza from '../../../images/pizza.svg';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux-store';
import { QuantityAction } from '../../redux';

import { useHistory } from 'react-router-dom';

import { usePrice } from '../../hooks';

export const Finisher: React.FC = () => {
  const { toppings } = useSelector((state: AppState) => state.reducer);
  const { size } = useSelector((state: AppState) => state.sizeReducer);
  const { price } = useSelector((state: AppState) => state.priceReducer);
  const { qty } = useSelector((state: AppState) => state.quantityReducer);
  //fix link path and routing
  const dispatch = useDispatch();

  const history = useHistory();

  const { setPrice } = usePrice(qty, size);

  const [error, setError] = useState('');

  const handlePrice = () => {
    if (qty !== 0 && toppings.length) {
      setPrice();
      setError('');
    }

    if (qty === 0) {
      setError('Please select the number of pizzas you want to order');
    }

    if (!toppings.length) {
      setError('Please select atleast 1 topping');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.currentTarget;

    dispatch(QuantityAction.add(valueAsNumber));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (price === 0) {
      setError('Please click on the check price before buying.');
    }

    if (price !== 0 && error === '') {
      history.push('/order');
    }
  };

  return (
    <>
      <div>
        <img src={pizza} />
        <br />
        <form onSubmit={handleSubmit}>
          <input type='number' onChange={handleChange} required />
          <p>QTY</p>
          <button type='button' onClick={handlePrice}>
            Check price
          </button>
          <p>{error}</p>
          <p>${price}</p>
          <p>ORDER TOTAL</p>
          <button type='submit'>Buy Pizza! Pizza!</button>
        </form>
      </div>
    </>
  );
};
