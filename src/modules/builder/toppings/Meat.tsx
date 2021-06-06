import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import meat from '../../../images/meat.svg';

export const Meat: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 5;

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <>
      <button data-id={id} value={isActive} name='Meat' onClick={handleButton}>
        <img src={meat} />
        <p>Meat</p>
      </button>
    </>
  );
};
