import React, { useState } from 'react';

import { useAdd } from 'modules/hooks';

import corn from 'images/corn.svg';

export const Corn: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 2;

  const btnStyle = isActive === 'off' ? 'btn-inactive' : 'btn-active';

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <button
      value={isActive}
      name='Corn'
      onClick={handleButton}
      className={btnStyle}
    >
      <div>
        <img src={corn} />
      </div>
      <p className='topping'>Corn</p>
    </button>
  );
};
