import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'modules/redux-store';
import { OrderAction } from 'modules/builder/redux';

export const PizzaSize: React.FC = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state: AppState) => state.orderReducer);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    dispatch(OrderAction.size(value));
  };

  return (
    <>
      <p className='title'>Pizza! Pizza! size</p>
      <div className='size-select'>
        <div id='button-group'>
          <button
            value='S'
            onClick={handleButton}
            className={orders.size === 'S' ? 'active-size' : 'inactive-size'}
          >
            S
          </button>
          <button
            value='M'
            onClick={handleButton}
            className={orders.size === 'M' ? 'active-size' : 'inactive-size'}
          >
            M
          </button>
          <button
            value='L'
            onClick={handleButton}
            className={orders.size === 'L' ? 'active-size' : 'inactive-size'}
          >
            L
          </button>
        </div>
      </div>
    </>
  );
};
