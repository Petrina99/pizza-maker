import React from 'react';

import { useDispatch } from 'react-redux';
import { ToppingAction } from 'modules/builder/redux';

export const useAdd = (
  id: number,
  set: React.Dispatch<React.SetStateAction<string>>,
) => {
  const dispatch = useDispatch();

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const { name } = e.currentTarget;

    if (value === 'off') {
      dispatch(ToppingAction.add({ name, id }));
      set('on');
    }

    if (value === 'on') {
      dispatch(ToppingAction.remove(id));
      set('off');
    }
  };

  return {
    handleButton,
  };
};
