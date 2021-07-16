import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AppState } from '../../redux-store';
import { useSelector } from 'react-redux';

import { validation } from 'modules/authentication/auth-components';

import { useFirebaseHooks } from 'modules/firebase/hooks';
import { useAuth } from 'modules/authentication/hooks';

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
    <div className='reg-div'>
      <form onSubmit={handleSubmit(onSubmit)} className='reg-form'>
        <h1>Create an account</h1>
        <div className='input-div'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            {...register('email', {
              required: 'Email field is required.',
              pattern: {
                value: validation.email,
                message: 'Please enter a valid email.',
              },
            })}
            placeholder='name@gmail.com'
            id='email-register'
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor='password'>Password</label>
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
            placeholder='Choose your password'
            id='password-register'
          />
          {errors.password && <p>{errors.password.message}</p>}
          <img
            src={inputType === 'password' ? eye : hide}
            onClick={showPassword}
          />
        </div>
        {error && <p>{error}</p>}
        <div className='submit-div'>
          <button type='submit' className='reg-btn'>
            Register
          </button>
          <div className='reg-google'>
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
