import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux-store';
import { AuthAction } from 'modules/authentication/redux';

import { useAuth } from 'modules/authentication/hooks';

import eye from '../../../images/visibility-button.svg';
import hide from '../../../images/hide.svg';

//import { useHistory } from 'react-router-dom';

import style from '../styles/login.module.css';

type FormValues = {
  email: string;
  password: string;
};

import { validation } from 'modules/authentication/auth-components';

export const LoginForm: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.authReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { login, rememberMe, googleSignIn } = useAuth();
  const dispatch = useDispatch();

  const [inputType, setInputType] = useState('password');

  const onSubmit = (data: FormValues) => {
    login(data.email, data.password);
    dispatch(AuthAction.error(''));
  };

  function setPersistence() {
    rememberMe();
  }

  const showPassword = () => {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  function handleGoogle() {
    googleSignIn();
  }

  return (
    <div className={style.login}>
      <p className={style.pizzaTron}>Pizza-á-tron</p>
      <h1 className={style.welcomeMessage}>Welcome to Pizza-á-tron</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Login to an existing account</h1>
        <article className={style.inputArticle}>
          <div className={style.emailDiv}>
            <input
              type='email'
              id='email-login'
              placeholder='Email'
              {...register('email', {
                required: 'Email field is required.',
                pattern: {
                  value: validation.email,
                  message: 'Please enter a valid email.',
                },
              })}
            />
            {errors.email && (
              <p className={style.errorMessage}>{errors.email.message}</p>
            )}
          </div>
          <div className={style.passDiv}>
            <input
              type={inputType}
              id='password-login'
              {...register('password', {
                required: 'Password field is required.',
              })}
              name='password'
              placeholder='Password'
            />
            <button type='button' onClick={showPassword}>
              <img src={inputType === 'password' ? eye : hide} />
            </button>
            {errors.password && (
              <p className={style.errorMessage}>{errors.password.message}</p>
            )}
          </div>
        </article>
        {error ? (
          <div className='error-login'>
            <p>{error}</p>
          </div>
        ) : (
          ''
        )}
        <section className={style.submitSection}>
          <div className={style.loginDiv}>
            <button type='submit'>Login</button>
          </div>
          <p>Or</p>
          <div className={style.googleDiv}>
            <button type='button' onClick={handleGoogle}>
              Sign in with google
            </button>
          </div>
        </section>
        <div className={style.rememberDiv}>
          <button
            type='button'
            onClick={setPersistence}
            className='remember-btn'
          >
            Remember me
          </button>
        </div>
      </form>
    </div>
  );
};
