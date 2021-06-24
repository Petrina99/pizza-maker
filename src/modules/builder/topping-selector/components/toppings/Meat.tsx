import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import meat from '../../../images/meat.svg';

export const Meat: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 5;

  const btnStyle = isActive === 'off' ? 'btn-inactive' : 'btn-active';

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <button
      value={isActive}
      name='Meat'
      onClick={handleButton}
      className={btnStyle}
    >
      <div>
        <img src={meat} />
      </div>
      <p className='topping'>Meat</p>
    </button>
  );
};
