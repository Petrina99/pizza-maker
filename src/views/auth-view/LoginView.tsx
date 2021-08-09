import React from 'react';

import { LoginForm } from 'modules/authentication/auth-components';
import { Link } from 'react-router-dom';

import style from './styles/login.module.css';

export const LoginView: React.FC = () => {
  return (
    <>
      <LoginForm />
      <p className={style.p}>
        Forgot your password?
        <Link to='/reset-pass' className={style.linkElement}>
          <strong> Reset password</strong>
        </Link>
      </p>
      <p className={style.p}>
        Don't have an account?
        <Link to='/register' className={style.linkElement}>
          <strong> Register.</strong>
        </Link>
      </p>
    </>
  );
};
