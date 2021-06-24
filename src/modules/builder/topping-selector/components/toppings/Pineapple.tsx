import React, { useState } from 'react';

import { useAdd } from 'modules/hooks';

import pineapple from 'images/pineapple.svg';

export const Pineapple: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 4;

  const btnStyle = isActive === 'off' ? 'btn-inactive' : 'btn-active';

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <button
      value={isActive}
      name='Pineapple'
      onClick={handleButton}
      className={btnStyle}
    >
      <div>
        <img src={pineapple} />
      </div>
      <p className='topping'>Pineapple</p>
    </button>
  );
};
