import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux-store';

import { ErrorAction } from '../../redux';

import { useAuth } from '../../hooks';

import { Link } from 'react-router-dom';
export const Login: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.errorReducer);
  const { login, rememberMe, googleSignIn } = useAuth();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setEmail(value);
    dispatch(ErrorAction.add(''));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setPassword(value);
    dispatch(ErrorAction.add(''));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email, password);
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
          type={inputType}
          name='password'
          placeholder='Enter your password'
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <button onClick={showPassword} type='button'>
          Show Password
        </button>
        <br />
        <br />
        <Link to='/login'>
          <button type='submit'>Login</button>
        </Link>
      </form>
      <p>Or</p>
      <br />
      <button type='button' onClick={handleGoogle}>
        Sign in with google
      </button>
      <button onClick={setPersistence}>Remember me</button>
    </>
  );
};
