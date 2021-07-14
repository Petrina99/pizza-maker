import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AppState } from 'modules/redux-store';
import { useSelector, useDispatch } from 'react-redux';

import { AuthAction } from 'modules/authentication/redux';

import { useAuth } from 'modules/authentication/hooks';

export const ResetPasswordForm: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.authReducer);
  const [email, setEmail] = useState('');

  type FormValues = {
    email: string;
  };

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<FormValues>();

  const { resetPassword } = useAuth();

  const onSubmit = (data: FormValues) => {
    resetPassword(data.email);
    setEmail(data.email);
    console.log(data.email);
    console.log(error);
  };

  const handleEmailChange = () => {
    dispatch(AuthAction.error(''));
    setEmail('');
  };

  return (
    <div className='reset-div'>
      <form onSubmit={handleSubmit(onSubmit)} className='reset-form'>
        <label htmlFor='email'>
          Enter the email adress of an account that you want to reset your
          password for:
        </label>
        <input
          type='email'
          {...register('email', { required: true })}
          onChange={handleEmailChange}
          id='email-reset'
        />
        <button type='submit'>Reset password</button>
      </form>
      {!error && email ? (
        <p>A link for password reset has been sent to your email.</p>
      ) : (
        ''
      )}
      {error && email ? <p className='reset-err'>{error}</p> : ''}
    </div>
  );
};
