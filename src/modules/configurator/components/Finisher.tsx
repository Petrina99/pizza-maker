import React from 'react';

import pizza from 'images/pizza.svg';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'modules/redux-store';
import { OrderAction } from 'modules/order/redux';

import { useHistory } from 'react-router-dom';
import { useOrder } from 'modules/order/hooks';

export const Finisher: React.FC = () => {
  const { quantity, toppings, error } = useSelector(
    (state: AppState) => state.orderReducer,
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const { getCurrentPrice } = useOrder();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.currentTarget;

    dispatch(OrderAction.quantity(valueAsNumber > 0 ? valueAsNumber : 1));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!toppings.length) {
      dispatch(OrderAction.error('Please select atleast 1 topping.'));
    }

    if (toppings.length) {
      history.push('/order');
      dispatch(OrderAction.error(''));
    }
  };

  return (
    <div className='finisher'>
      <img src={pizza} />
      <br />
      <form onSubmit={handleSubmit} className='finisher-form'>
        <div className='qty'>
          <input
            type='number'
            value={quantity}
            onChange={handleChange}
            required
            min={1}
          />
          <p>QTY</p>
        </div>
        <div className='price-total'>
          <p>${getCurrentPrice()}</p>
          <p>ORDER TOTAL</p>
        </div>
        <button type='submit' className='buy-btn'>
          Buy Pizza! Pizza!
        </button>
        <p>{error}</p>
      </form>
    </div>
  );
};
