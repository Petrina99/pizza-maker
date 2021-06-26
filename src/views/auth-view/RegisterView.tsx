import React from 'react';

import { RegisterForm } from 'modules/authentication/register';
import { Link } from 'react-router-dom';

export const RegisterView: React.FC = () => {
  return (
    <>
      <RegisterForm />
      <p className='login-p'>
        Already have an account?
        <Link to='/login' className='login-link'>
          <strong> Sign in</strong>
        </Link>
      </p>
    </>
  );
};
