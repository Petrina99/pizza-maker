import React from 'react';

import pizza from 'images/pizza.svg';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'modules/redux-store';
import { OrderAction } from 'modules/order/redux';

import { useHistory } from 'react-router-dom';
import { useOrder } from 'modules/order/hooks';

import style from '../styles/finisher.module.css';

export const Finisher: React.FC = () => {
  const { pizzaData, toppings, error } = useSelector(
    (state: AppState) => state.orderReducer,
  );

  const dispatch = useDispatch();

  const history = useHistory();

  const { getCurrentPrice } = useOrder();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.currentTarget;

    dispatch(
      OrderAction.update({ quantity: valueAsNumber > 0 ? valueAsNumber : 1 }),
    );
  };

  const handleSubmit = () => {
    if (!toppings.length) {
      dispatch(OrderAction.error('Please select atleast 1 topping.'));
    }

    if (toppings.length) {
      history.push('/order');
      dispatch(OrderAction.error(''));
    }
  };

  return (
    <section className={style.finisherSection}>
      <div className={style.finisherDiv}>
        <div className={style.imgDiv}>
          <img src={pizza} className={style.img} />
        </div>
        <div className={style.qtyDiv}>
          <div className={style.inputDiv}>
            <input
              type='number'
              value={pizzaData.quantity}
              onChange={handleChange}
              required
              min={1}
              className={style.qtyInput}
            />
          </div>
          <p className={style.qtyP}>QTY</p>
        </div>
        <div className={style.priceDiv}>
          <p className={style.price}>${getCurrentPrice()}</p>
          <p className={style.orderTotal}>ORDER TOTAL</p>
        </div>
        <div className={style.btnDiv}>
          <button type='button' className={style.btnBuy} onClick={handleSubmit}>
            Buy Pizza! Pizza!
          </button>
          <p>{error}</p>
        </div>
      </div>
    </section>
  );
};
