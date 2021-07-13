import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AppState } from '../../redux-store';
import { useSelector, useDispatch } from 'react-redux';

import { AuthAction } from 'modules/authentication/redux';

import { useAuth } from 'modules/authentication/hooks';

export const ResetPasswordForm: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.authReducer);

  type FormValues = {
    email: string;
  };

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(true);

  const onSubmit = (data: FormValues) => {
    if (errors) {
      setLoading(true);
      resetPassword(data.email);
    }

    if (!errors) {
      console.log(data);
      resetPassword(data.email);
      setLoading(false);
      dispatch(AuthAction.error(''));
    }

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
        <input type='email' {...register('email', { required: true })} />
        <button type='submit'>Reset password</button>
      </form>
      {loading ? (
        ''
      ) : (
        <p className='reset-msg'>
          A link for your password reset has been sent to your email.
        </p>
      )}
      <p className='reset-err'>{error}</p>
    </div>
  );
};
