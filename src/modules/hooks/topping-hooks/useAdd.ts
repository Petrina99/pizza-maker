import React from 'react';

import { useDispatch } from 'react-redux';
import { Actions } from '../../redux';

export const useAdd = (
  id: number,
  set: React.Dispatch<React.SetStateAction<string>>,
) => {
  const dispatch = useDispatch();

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const { name } = e.currentTarget;

    if (value === 'off') {
      dispatch(Actions.add({ name, id }));
      set('on');
    }

    if (value === 'on') {
      dispatch(Actions.remove(id));
      set('off');
    }
  };

  return {
    handleButton,
  };
};
