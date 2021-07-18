import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { OrderAction } from 'modules/order/redux';
import { AppState } from 'modules/redux-store';

import { useOrder } from 'modules/order/hooks';
export const OrderDetails: React.FC = () => {
  // need qty, toppings, size, price and if discount is on
  const { toppings, pizzaData, error } = useSelector(
    (state: AppState) => state.orderReducer,
  );

  const { getCurrentPrice } = useOrder();
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [discountMessage, setMessage] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setInput(value);
  };

  const handleClick = () => {
    if (input === 'pizza2021') {
      dispatch(OrderAction.update({ discount: true }));
      setMessage('Success. 20% discount applied.');
    }

    if (input !== 'pizza2021') {
      dispatch(OrderAction.update({ discount: true }));
      setMessage('You have entered an invalid code.');
    }
  };

  return (
    <div className='order'>
      <p className='order-title'>Almost done!</p>
      <div className='info'>
        <p>Order details</p>
        <p>TOPPINGS</p>
        <p>
          {toppings
            .sort((a, b) => a.id - b.id)
            .map((item) => item.title)
            .join(', ')}{' '}
          Size: {pizzaData.size}
        </p>
        <p className='qty-numb'>QTY: {pizzaData.quantity}</p>
        <div className='delivery'>
          <p>Delivery</p>
          <p>Free delivery within 1 hour or you don't have to pay.</p>
        </div>
        {pizzaData.discount ? (
          <p className='discount-valid'>Discount applied.</p>
        ) : (
          <div className='discount-apply'>
            <input
              type='text'
              placeholder='Enter discount code'
              onChange={handleInput}
              value={input}
            />
            <button type='button' onClick={handleClick}>
              Apply
            </button>
            <p>{discountMessage}</p>
          </div>
        )}
        <div className='info-price'>
          <p>Total price</p>
          <p>${getCurrentPrice()}</p>
        </div>
      </div>
      <p className='error-order'>{error}</p>
    </div>
  );
};
