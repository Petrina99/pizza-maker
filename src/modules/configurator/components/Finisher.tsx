import React, { useState, useEffect } from 'react';

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

  const [price, setPrice] = useState(0);

  const currentPrice = () => {
    //topping price logic, this way works, with state it doesnt
    let toppingPrice = 0;
    if (toppings.length === 1) {
      toppingPrice = 3;
    }

    if (toppings.length !== 0 && toppings.length !== 1) {
      toppingPrice = toppings.length * 3;
    }

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

    let discountPrice = 0;
    discountPrice = discount ? 3 : 0;
    setPrice((toppingPrice + sizePrice - discountPrice) * quantity);

    if (toppings.length === 0) {
      setPrice(0);
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
  };

  useEffect(() => {
    currentPrice();
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
            min={1}
          />
          <p>QTY</p>
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
