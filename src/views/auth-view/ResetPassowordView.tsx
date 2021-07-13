import React from 'react';

import { ResetPasswordForm } from 'modules/authentication/auth-components';

import { AuthAction } from 'modules/authentication/redux';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
export const ResetPasswordView: React.FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClick = () => {
    history.push('/login');
    dispatch(AuthAction.error(''));
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
