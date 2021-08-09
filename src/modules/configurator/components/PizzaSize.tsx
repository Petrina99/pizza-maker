import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'modules/redux-store';
import { OrderAction } from 'modules/order/redux';

import style from '../styles/pizzaSize.module.css';

export const PizzaSize: React.FC = () => {
  const dispatch = useDispatch();
  const { pizzaData } = useSelector((state: AppState) => state.orderReducer);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    dispatch(OrderAction.update({ size: value }));
  };

  return (
    <>
      <p className={style.p}>Pizza! Pizza! size</p>
      <div className={style.sizeSelect}>
        <div className={style.btnGroup}>
          <button
            value='S'
            onClick={handleButton}
            className={pizzaData.size === 'S' ? style.btnOn : style.btnOff}
          >
            S
          </button>
          <button
            value='M'
            onClick={handleButton}
            className={pizzaData.size === 'M' ? style.btnOn : style.btnOff}
          >
            M
          </button>
          <button
            value='L'
            onClick={handleButton}
            className={pizzaData.size === 'L' ? style.btnOn : style.btnOff}
          >
            L
          </button>
        </div>
      </div>
    </>
  );
};
