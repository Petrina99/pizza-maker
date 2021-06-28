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
  const [sizePrice, setSizePrice] = useState(0);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  const handleSizeChange = () => {
    if (size === 'S') {
      setSizePrice(2);
    }

    if (size === 'M') {
      setSizePrice(4);
    }

    if (size === 'L') {
      setSizePrice(6);
    }
  };

  const handleToppingChange = () => {
    setToppingPrice(toppings.length * 3);
  };

  const handleDiscount = () => {
    setDiscountPrice(discount ? 3 : 0);
  };

  const currentPrice = () => {
    setPrice((toppingPrice + sizePrice + discountPrice) * quantity);
  };

  useEffect(() => {
    handleDiscount();
  }, [discount]);

  useEffect(() => {
    handleSizeChange();
  }, [size]);

  useEffect(() => {
    handleToppingChange();
  }, [toppings]);

  useEffect(() => {
    currentPrice();
  }, [quantity]);

  const handlePrice = () => {
    if (quantity !== 0 && toppings.length) {
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
    const { valueAsNumber } = e.currentTarget;

    dispatch(OrderAction.quantity(valueAsNumber));
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
