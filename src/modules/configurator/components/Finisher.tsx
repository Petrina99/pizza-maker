import React, { useEffect } from 'react';

import pizza from 'images/pizza.svg';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'modules/redux-store';
import { OrderAction } from 'modules/order/redux';

import { useHistory } from 'react-router-dom';

export const Finisher: React.FC = () => {
  const { quantity, toppings, size, discount, error } = useSelector(
    (state: AppState) => state.orderReducer,
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const getCurrentPrice = () => {
    //topping price logic, this way works, with state it doesnt
    let totalPrice = 0;
    const price = 3;
    const discountPrice = discount ? 3 : 0;
    const toppingPrice = toppings.length * price;

    let sizePrice = 0;
    if (size === 'S') {
      sizePrice = 2;
    }

    if (size === 'M') {
      sizePrice = 4;
    }

    if (size === 'L') {
      sizePrice = 6;
    }

    if (toppings.length === 0) {
      totalPrice = 0;
    }

    if (toppings.length > 0) {
      totalPrice = (toppingPrice + sizePrice - discountPrice) * quantity;
    }

    console.log(
      'toppingPrice: ' +
        toppingPrice +
        ' toppingLength: ' +
        toppings.length +
        ' size: ' +
        sizePrice +
        ' discountPrice: ' +
        discountPrice +
        ' price: ' +
        price +
        ' quantity: ' +
        quantity,
    );

    return totalPrice;
  };

  useEffect(() => {
    getCurrentPrice();
  }, [quantity, discount, toppings.length, size]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.currentTarget;

    if (valueAsNumber === 0) {
      dispatch(OrderAction.quantity(1));
    }

    if (valueAsNumber !== 0) {
      dispatch(OrderAction.quantity(valueAsNumber));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (toppings.length === 0) {
      dispatch(OrderAction.error('Please select atleast 1 topping.'));
    }

    if (toppings.length > 0) {
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
