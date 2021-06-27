import React from 'react';

import { ResetPasswordForm } from 'modules/authentication/auth-components';

import { useHistory } from 'react-router-dom';
export const ResetPasswordView: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/login');
  };

  return (
    <>
      <ResetPasswordForm />
      <div className='sign-div'>
        <button className='sign-button' type='button' onClick={handleClick}>
          Back to Sign in
        </button>
      </div>
    </>
  );
};
