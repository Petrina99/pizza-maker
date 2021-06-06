import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import shrooms from '../../../images/shrooms.svg';
export const Shrooms: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 6;

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <>
      <button value={isActive} name='Shrooms' onClick={handleButton}>
        <img src={shrooms} />
        <p>Shrooms</p>
      </button>
    </>
  );
};
