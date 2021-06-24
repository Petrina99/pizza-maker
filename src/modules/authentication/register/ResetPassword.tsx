import React, { useState } from 'react';

import { AppState } from '../../redux-store';
import { useSelector, useDispatch } from 'react-redux';

import { AuthAction } from 'modules/authentication/redux';

import { useAuth } from '../hooks';

export const ResetPassword: React.FC = () => {
  const { loading, error } = useSelector(
    (state: AppState) => state.authReducer,
  );

  const dispatch = useDispatch();

  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setEmail(value);
    dispatch(AuthAction.error(''));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    resetPassword(email);

    if (error) {
      setEmail('');
    }

    console.log(email);
    console.log(error);
  };

  return (
    <div className='reset-div'>
      <form onSubmit={handleSubmit} className='reset-form'>
        <label htmlFor='email'>
          Enter the email adress of an account that you want to reset your
          password for:
        </label>
        <input type='email' value={email} onChange={handleEmail} />
        <button type='submit'>Reset password</button>
        <p className='reset-msg'>
          {loading
            ? ''
            : 'Link for a password reset has been sent to your email.'}
        </p>
        <p className='reset-err'>{error}</p>
      </form>
    </div>
  );
};
