import React, { useState } from 'react';

import { AppState } from '../../redux-store';
import { useSelector, useDispatch } from 'react-redux';

import { AuthAction } from 'modules/authentication/redux';

import { useAuth } from 'modules/authentication/hooks';

export const ResetPasswordForm: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.authReducer);

  const dispatch = useDispatch();

  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setEmail(value);
    dispatch(AuthAction.error(''));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && !error) {
      resetPassword(email);
      setLoading(false);
    }

    if (error) {
      setEmail('');
      setLoading(true);
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
            : 'A link for a password reset has been sent to your email adress.'}
        </p>
        <p className='reset-err'>{error}</p>
      </form>
    </div>
  );
};
