import React from 'react';

import { Login } from '../../modules';

import { Link } from 'react-router-dom';

export const LoginView: React.FC = () => {
  return (
    <>
      <Login />
      <Link to='/reset-pass'>
        <button>Reset password</button>
      </Link>
    </>
  );
};
