import React from 'react';

import { ResetPassword } from '../../modules';

import { useHistory } from 'react-router-dom';
export const ResetPasswordView: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/login');
  };

  return (
    <>
      <ResetPassword />
      <div className='sign-div'>
        <button className='sign-button' type='button' onClick={handleClick}>
          Back to Sign in
        </button>
      </div>
    </>
  );
};
