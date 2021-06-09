import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import shrooms from '../../../images/shrooms.svg';
export const Shrooms: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 6;

  const btnStyle = isActive === 'off' ? 'btn-inactive' : 'btn-active';

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <button
      value={isActive}
      name='Shrooms'
      onClick={handleButton}
      className={btnStyle}
    >
      <div>
        <img src={shrooms} />
      </div>
      <p className='topping'>Shrooms</p>
    </button>
  );
};
