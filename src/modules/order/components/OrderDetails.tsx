import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { OrderAction } from 'modules/order/redux';
import { AppState } from 'modules/redux-store';

import style from '../styles/orderDetails.module.css';

import { useOrder } from 'modules/order/hooks';
export const OrderDetails: React.FC = () => {
  // need qty, toppings, size, price and if discount is on
  const { toppings, pizzaData } = useSelector(
    (state: AppState) => state.orderReducer,
  );

  const { getCurrentPrice } = useOrder();
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setInput(value);
  };

  const handleClick = () => {
    if (input === 'pizza2021') {
      dispatch(OrderAction.update({ discount: true }));
    }

    if (input !== 'pizza2021') {
      dispatch(OrderAction.update({ discount: true }));
    }
  };

  return (
    <div className={style.orderDetails}>
      <div className={style.detailsDiv}>
        <p className={style.title}>Order details</p>
        <p className={style.toppingP}>TOPPINGS</p>
        <p className={style.toppingList}>
          {toppings
            .sort((a, b) => a.id - b.id)
            .map((item) => item.title)
            .join(', ')}{' '}
          Size: {pizzaData.size}
        </p>
        <p className={style.qty}>QTY: {pizzaData.quantity}</p>
      </div>
      <div className={style.delivery}>
        <p className={style.deliveryTitle}>Delivery</p>
        <p className={style.deliveryP}>
          Free delivery within 1 hour or you don't have to pay.
        </p>
      </div>
      {pizzaData.discount ? (
        <div className={style.discountTrueDiv}>
          <p className={style.discountTrueP}>Discount applied.</p>
        </div>
      ) : (
        <div className={style.discountInputDiv}>
          <input
            type='text'
            placeholder='Discount code'
            onChange={handleInput}
            value={input}
            className={style.discountInput}
          />
          <button
            type='button'
            className={style.discountBtn}
            onClick={handleClick}
          >
            Apply
          </button>
        </div>
      )}
      <div className={style.priceDiv}>
        <p className={style.priceTitle}>Total price</p>
        <p className={style.price}>${getCurrentPrice()}</p>
      </div>
    </div>
  );
};
