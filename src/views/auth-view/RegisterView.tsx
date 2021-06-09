import React from 'react';

import { Register } from '../../modules';
import { Link } from 'react-router-dom';

export const RegisterView: React.FC = () => {
  return (
    <>
      <Register />
      <p className='login-p'>
        Already have an account?
        <Link to='/login' className='login-link'>
          <strong> Sign in</strong>
        </Link>
      </p>
    </>
  );
};
