import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import pineapple from '../../../images/pineapple.svg';

export const Pineapple: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 4;

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <>
      <button value={isActive} name='Pineapple' onClick={handleButton}>
        <img src={pineapple} />
        <p>Pineapple</p>
      </button>
    </>
  );
};
