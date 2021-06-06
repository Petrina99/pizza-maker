import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import egg from '../../../images/egg.svg';

export const Egg: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 3;

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <>
      <button value={isActive} name='Egg' onClick={handleButton}>
        <img src={egg} />
        <p>Egg</p>
      </button>
    </>
  );
};
