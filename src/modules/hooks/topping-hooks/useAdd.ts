import { OrderAction } from 'modules/order';
import React from 'react';

import { useDispatch } from 'react-redux';

export const useAdd = (
  id: number,
  set: React.Dispatch<React.SetStateAction<string>>,
) => {
  const dispatch = useDispatch();

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const { name } = e.currentTarget;

    if (value === 'off') {
      dispatch(OrderAction.toppingsAdd({ name, id }));
      set('on');
    }

    if (value === 'on') {
      dispatch(OrderAction.toppingsRemove(id));
      set('off');
    }
  };

  return {
    handleButton,
  };
};
