import React from 'react';

import { RegisterForm } from 'modules/authentication/auth-components';
import { Link } from 'react-router-dom';

import style from './styles/register.module.css';

export const RegisterView: React.FC = () => {
  return (
    <>
      <RegisterForm />
      <p className={style.p}>
        Already have an account?
        <Link to='/login' className={style.signInLink}>
          <strong> Sign in</strong>
        </Link>
      </p>
    </>
  );
};
