import React, { useState } from 'react';

import { AppState } from '../../redux-store';
import { useSelector, useDispatch } from 'react-redux';

import { ErrorAction, MessageAction } from '../../redux';

import { useAuth } from '../../hooks';

export const ResetPassword: React.FC = () => {
  const { message } = useSelector((state: AppState) => state.messageReducer);
  const { error } = useSelector((state: AppState) => state.errorReducer);

  const dispatch = useDispatch();

  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setEmail(value);
    dispatch(ErrorAction.add(''));
    dispatch(MessageAction.add(''));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && !error) {
      resetPassword(email);
    }

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
        <p className='reset-msg'>{message}</p>
        <p className='reset-err'>{error}</p>
      </form>
    </div>
  );
};
