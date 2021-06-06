import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import corn from '../../../images/corn.svg';

export const Corn: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 2;

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <>
      <button value={isActive} name='Corn' onClick={handleButton}>
        <img src={corn} />
        <p>Corn</p>
      </button>
    </>
  );
};
