import React from 'react';

import { Register } from '../../modules';
import { Link } from 'react-router-dom';

export const RegisterView: React.FC = () => {
  return (
    <>
      <Register />
      <p>
        Already have an account? <strong>Sign in</strong> instead.
      </p>
      <Link to='/login'>
        <button>Sign in</button>
      </Link>
    </>
  );
};
