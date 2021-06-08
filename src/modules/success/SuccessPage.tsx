import React from 'react';

import pizza from '../../images/pizza-success.svg';
export const SuccessPage: React.FC = () => {
  return (
    <>
      <img src={pizza} alt='Pizza success' />
      <h1>Your Pizza! Pizza!</h1>
      <p>is on its way!</p>
      <p>You should be enjoying your meal in no more than 45 minutes.</p>
    </>
  );
};
