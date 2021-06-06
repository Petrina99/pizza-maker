import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import bacon from '../../../images/bacon.svg';

export const Bacon: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 7;

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <>
      <button value={isActive} name='Bacon' onClick={handleButton}>
        <img src={bacon} />
        <p>Bacon</p>
      </button>
    </>
  );
};
