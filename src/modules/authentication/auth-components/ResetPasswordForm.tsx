import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AppState } from 'modules/redux-store';
import { useSelector } from 'react-redux';

import { useAuth } from 'modules/authentication/hooks';

type FormValues = {
  email: string;
};

export const ResetPasswordForm: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.authReducer);
  const [email, setEmail] = useState('');

  const { register, handleSubmit } = useForm<FormValues>();

  const { resetPassword } = useAuth();

  const onSubmit = (data: FormValues) => {
    resetPassword(data.email);
    setEmail(data.email);
    console.log(data.email);
    console.log(error);
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
          id='email-reset'
        />
        <button type='submit'>Reset password</button>
      </form>
      {email &&
        (error ? (
          <p className='reset-err'>{error}</p>
        ) : (
          <p>A link for password reset has been sent to your email.</p>
        ))}
    </div>
  );
};
