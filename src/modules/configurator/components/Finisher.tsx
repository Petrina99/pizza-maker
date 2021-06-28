import React from 'react';

import pizza from 'images/pizza.svg';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'modules/redux-store';
import { OrderAction } from 'modules/order/redux';

import { useHistory } from 'react-router-dom';

import { usePrice } from 'modules/hooks';

export const Finisher: React.FC = () => {
  const { quantity, toppings, size, error } = useSelector(
    (state: AppState) => state.orderReducer,
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const { setPrice } = usePrice(quantity, size);

  const handlePrice = () => {
    if (quantity !== 0 && toppings.length) {
      setPrice();
      dispatch(OrderAction.error(''));
    }

    if (quantity === 0) {
      dispatch(
        OrderAction.error(
          'Please select the number of pizzas you want to order',
        ),
      );
      dispatch(OrderAction.quantity(1));
    }

    if (!toppings.length) {
      dispatch(OrderAction.error('Please select atleast one topping.'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value === 0) {
      dispatch(OrderAction.error('You have to order atleast 1 pizza.'));
    }

    if (parseInt(value) !== 0) {
      dispatch(OrderAction.quantity(parseInt(value)));
      dispatch(OrderAction.error(''));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (price) {
      dispatch(
        OrderAction.error('Please click on the check price before buying.'),
      );
    }

    if (!toppings.length) {
      dispatch(OrderAction.error('Please select atleast 1 topping.'));
    }

    if (price !== 0 && !error) {
      history.push('/order');
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
          />
          <p>QTY</p>
        </div>
        <div className='price-check'>
          <button type='button' onClick={handlePrice}>
            Check price
          </button>
          <p>{error}</p>
        </div>
        <div className='price-total'>
          <p>${price}</p>
          <p>ORDER TOTAL</p>
        </div>
        <button type='submit' className='buy-btn'>
          Buy Pizza! Pizza!
        </button>
      </form>
    </div>
  );
};
