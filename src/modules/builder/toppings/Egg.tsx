import React, { useState } from 'react';

import { useAdd } from '../../hooks';

import egg from '../../../images/egg.svg';

export const Egg: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 3;

  const btnStyle = isActive === 'off' ? 'btn-inactive' : 'btn-active';

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <button
      value={isActive}
      name='Egg'
      onClick={handleButton}
      className={btnStyle}
    >
      <div>
        <img src={egg} />
      </div>
      <p className='topping'>Egg</p>
    </button>
  );
};
