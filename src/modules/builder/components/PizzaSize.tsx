import React from 'react';

import { useDispatch } from 'react-redux';
import { SizeAction } from '../../redux';

export const PizzaSize: React.FC = () => {
  const dispatch = useDispatch();

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    dispatch(SizeAction.add(value));
  };

  return (
    <>
      <div id='button-group'>
        <button value='S' onClick={handleButton}>
          S
        </button>
        <button value='M' onClick={handleButton}>
          M
        </button>
        <button value='L' onClick={handleButton}>
          L
        </button>
      </div>
    </>
  );
};
