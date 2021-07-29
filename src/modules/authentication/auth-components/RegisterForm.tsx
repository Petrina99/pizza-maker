import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AppState } from 'modules/redux-store';
import { useSelector, useDispatch } from 'react-redux';
import { AuthAction } from 'modules/authentication/redux';

import { validation } from 'modules/authentication/auth-components';

import { useFirebaseHooks } from 'modules/firebase/hooks';
import { useAuth } from 'modules/authentication/hooks';

import style from '../styles/register.module.css';

import eye from 'images/visibility-button.svg';
import hide from 'images/hide.svg';

type FormValues = {
  email: string;
  password: string;
};

export const RegisterForm: React.FC = () => {
  const { error, user } = useSelector((state: AppState) => state.authReducer);

  const { handleRegister, googleSignIn } = useAuth();
  const { pushUser } = useFirebaseHooks('users');
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [inputType, setInputType] = useState('password');

  function onSubmit(data: FormValues) {
    handleRegister(data.email, data.password);
    if (user) {
      pushUser(data.email, { user: user });
      dispatch(AuthAction.error(''));
    }
    console.log(data);
  }

  function showPassword() {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  }

  function handleGoogle() {
    googleSignIn();
  }

  return (
    <div className={style.register}>
      <p className={style.pizzaTron}>Pizza-á-tron</p>
      <h1 className={style.welcomeMessage}>Welcome to Pizza-á-tron</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <h1>Create an account</h1>
        <article className={style.inputArticle}>
          <div className={style.emailDiv}>
            <input
              type='email'
              {...register('email', {
                required: 'Email field is required.',
                pattern: {
                  value: validation.email,
                  message: 'Please enter a valid email.',
                },
              })}
              placeholder='Email'
              id='email-register'
            />
            {errors.email && (
              <p className={style.errorMessage}>{errors.email.message}</p>
            )}
          </div>
          <div className={style.passDiv}>
            <input
              type={inputType}
              {...register('password', {
                required: 'Password filed is required',
                pattern: {
                  value: validation.password,
                  message:
                    'Please enter a password that contains atleast 8 characters, 1 number and 1 special character.',
                },
              })}
              placeholder='Password'
              id='password-register'
            />
            <button type='button' onClick={showPassword}>
              <img src={inputType === 'password' ? eye : hide} />
            </button>
            {errors.password && (
              <p className={style.errorMessage}>{errors.password.message}</p>
            )}
          </div>
        </article>
        {error && <p className={style.errorMessage}>{error}</p>}
        <section className={style.submitArticle}>
          <div className={style.submitDiv}>
            <button type='submit'>Register</button>
          </div>
          <p>Or</p>
          <div className={style.googleDiv}>
            <button type='button' onClick={handleGoogle}>
              Sign in with google
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};
