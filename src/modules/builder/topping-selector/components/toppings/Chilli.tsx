import React, { useState } from 'react';

import { useAdd } from 'modules/hooks';

import chilli from 'images/chilli.svg';

export const Chilli: React.FC = () => {
  const [isActive, setIsActive] = useState('off');
  const id = 1;

  const btnStyle = isActive === 'off' ? 'btn-inactive' : 'btn-active';

  const { handleButton } = useAdd(id, setIsActive);

  return (
    <button
      value={isActive}
      name='Chilli'
      onClick={handleButton}
      className={btnStyle}
    >
      <div>
        <img src={chilli} />
      </div>
      <p className='topping'>Chilli</p>
    </button>
  );
};
