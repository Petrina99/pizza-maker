import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import chilli from '../../../images/chilli.svg';

export const Chilli: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 1;

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <>
      <button value={isActive} name='Chilli' onClick={handleButton}>
        <img src={chilli} />
        <p>Chilli</p>
      </button>
    </>
  );
};
