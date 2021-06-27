import React from 'react';

import { LoginForm } from 'modules/authentication/auth-components';
import { Link } from 'react-router-dom';

export const LoginView: React.FC = () => {
  return (
    <>
      <LoginForm />
      <p className='reset-p'>
        Forgot your password?
        <Link to='/reset-pass' className='reset-link'>
          <strong> Reset password</strong>
        </Link>
      </p>
      <p className='register-p'>
        Don't have an account?
        <Link to='/register' className='register-link'>
          <strong> Register.</strong>
        </Link>
      </p>
    </>
  );
};
