import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import bacon from '../../../images/bacon.svg';

export const Bacon: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 7;

  const btnStyle = isActive === 'off' ? 'btn-inactive' : 'btn-active';

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <button
      value={isActive}
      name='Bacon'
      onClick={handleButton}
      className={btnStyle}
    >
      <div>
        <img src={bacon} />
      </div>
      <p className='topping'>Bacon</p>
    </button>
  );
};
