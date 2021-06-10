import React from 'react';

import pizza from '../../images/pizza-success.svg';
export const SuccessPage: React.FC = () => {
  return (
    <div className='order-success'>
      <div className='pizza-success'>
        <img src={pizza} alt='Pizza success' />
      </div>
      <div className='success-div'>
        <p className='success-title'>Your Pizza! Pizza!</p>
        <p className='success-title2'>is on its way!</p>
        <p className='success-par'>You should be enjoying your meal in no</p>
        <p className='success-par2'>more than 45 minutes.</p>
      </div>
    </div>
  );
};
