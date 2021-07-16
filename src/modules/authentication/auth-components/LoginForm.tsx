import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSelector } from 'react-redux';
import { AppState } from '../../redux-store';

import { useAuth } from 'modules/authentication/hooks';

import eye from '../../../images/visibility-button.svg';
import hide from '../../../images/hide.svg';

//import { useHistory } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.authReducer);

  const { register, handleSubmit } = useForm<FormValues>();
  const { login, rememberMe, googleSignIn } = useAuth();

  const [inputType, setInputType] = useState('password');

  const onSubmit = (data: FormValues) => {
    login(data.email, data.password);
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
    <div className='login-div'>
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign in</h1>
        <div className='input-login'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email-login'
            placeholder='Enter your email.'
            {...register('email', { required: 'Email field is required.' })}
          />
          <label htmlFor='password'>Password</label>
          <input
            type={inputType}
            id='password-login'
            {...register('password', {
              required: 'Password field is required.',
            })}
            name='password'
            placeholder='Enter your password'
          />
          <img
            src={inputType === 'password' ? eye : hide}
            onClick={showPassword}
          />
        </div>
        {error ? (
          <div className='error-login'>
            <p>{error}</p>
          </div>
        ) : (
          ''
        )}
        <div className='submit-login'>
          <button type='submit' className='log-btn'>
            Login
          </button>
          <button
            type='button'
            onClick={setPersistence}
            className='remember-btn'
          >
            Remember me
          </button>
          <div className='log-google'>
            <p>Or</p>
            <button type='button' onClick={handleGoogle}>
              Sign in with google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
