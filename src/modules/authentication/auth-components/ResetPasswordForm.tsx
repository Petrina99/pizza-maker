import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AppState } from 'modules/redux-store';
import { useSelector, useDispatch } from 'react-redux';
import { AuthAction } from 'modules/authentication/redux';

import { useAuth } from 'modules/authentication/hooks';

import style from '../styles/resetPassword.module.css';

type FormValues = {
  email: string;
};

import { validation } from 'modules/authentication/auth-components';

export const ResetPasswordForm: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.authReducer);
  const [email, setEmail] = useState('');

  const { register, handleSubmit } = useForm<FormValues>();
  const dispatch = useDispatch();

  const { resetPassword } = useAuth();

  const onSubmit = (data: FormValues) => {
    resetPassword(data.email);
    setEmail(data.email);
    console.log(data.email);
    console.log(error);
    dispatch(AuthAction.error(''));
  };

  return (
    <div className={style.resetPassword}>
      <p className={style.pizzaTron}>Pizza-á-tron</p>
      <h1 className={style.resetMessage}>
        Reset password for your Pizza-á-tron account
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <label htmlFor='email' className={style.label}>
          Enter the email adress of an account that you want to reset your
          password for:
        </label>
        <div className={style.inputDiv}>
          <input
            type='email'
            {...register('email', {
              required: true,
              pattern: {
                value: validation.email,
                message: 'Please enter a valid email address.',
              },
            })}
            id='email-reset'
            placeholder='Email'
            className={style.resetInput}
          />
        </div>
        <div className={style.resetBtnDiv}>
          <button type='submit' className={style.resetBtn}>
            Reset password
          </button>
        </div>
      </form>
      {email &&
        (error ? (
          <p className={style.errorMessage}>{error}</p>
        ) : (
          <p className={style.successMessage}>
            A link for password reset has been sent to your email.
          </p>
        ))}
    </div>
  );
};
