import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux-store';
import { SizeAction } from '../../redux';

export const PizzaSize: React.FC = () => {
  const dispatch = useDispatch();
  const { size } = useSelector((state: AppState) => state.sizeReducer);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    dispatch(SizeAction.add(value));
  };

  return (
    <>
      <p className='title'>Pizza! Pizza! size</p>
      <div className='size-select'>
        <div id='button-group'>
          <button
            value='S'
            onClick={handleButton}
            className={size === 'S' ? 'active-size' : 'inactive-size'}
          >
            S
          </button>
          <button
            value='M'
            onClick={handleButton}
            className={size === 'M' ? 'active-size' : 'inactive-size'}
          >
            M
          </button>
          <button
            value='L'
            onClick={handleButton}
            className={size === 'L' ? 'active-size' : 'inactive-size'}
          >
            L
          </button>
        </div>
      </div>
    </>
  );
};
