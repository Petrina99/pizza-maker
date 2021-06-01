import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../redux-store';
import { UserAction } from '../../redux';
export const Login: React.FC = () => {
  const { errors } = useSelector((state: AppState) => state.errorReducer);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [newError, setNewError] = useState(false);

  /* lets us know if redux error state got updated */
  const addError = () => {
    if (errors !== []) {
      setNewError(true);
    } else {
      setNewError(false);
    }
  };

  /* it is triggered every time errors array is updated */
  useEffect(() => {
    addError();
  }, [errors]);

  const handleError = () => {
    if (newError) {
      setError(errors[errors.length - 1].error);
    } else {
      setError('');
    }
  };

  /* triggered every time handleError function adds a new error */
  useEffect(() => {
    handleError();
  }, [error]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setEmail(value);
    setError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setPassword(value);
    setError('');
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!error) {
      dispatch(
        UserAction.add({ email: email, password: password, hasAccount: true }),
      );
    } else {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <h1>Sign in</h1>
        <p>{error}</p>
        <input
          type='email'
          name='email'
          placeholder='Enter your email.'
          onChange={handleEmailChange}
          value={email}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <button type='submit'>Login</button>
      </form>
      <button>Remember me</button>
    </>
  );
};
