import React from 'react';

import { ResetPassword } from '../../modules';

import { Link } from 'react-router-dom';
export const ResetPasswordView: React.FC = () => {
  return (
    <>
      <ResetPassword />
      <Link to='/login'>
        <button>Back to Sign in</button>
      </Link>
    </>
  );
};
