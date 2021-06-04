import React, { useState } from 'react';

import { AppState } from '../../redux-store';
import { useDispatch, useSelector } from 'react-redux';

import { ErrorAction } from '../../redux';

import { useAuth } from '../../hooks';
export const Register: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.errorReducer);
  const { register, googleSignIn } = useAuth();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;

    setEmail(value);
    dispatch(ErrorAction.add(''));
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;

    setPassword(value);
    dispatch(ErrorAction.add(''));
  }

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const regex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/g;

    const isValid = regex.test(password);

    if (!isValid) {
      dispatch(
        ErrorAction.add(
          'Please enter a valid password that is at least 8 characters long and that it contains numbers and special characters.',
        ),
      );
    }

    if (isValid) {
      register(email, password);
      console.log(error);
    }
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
    <>
      <form onSubmit={handleSignUp}>
        <h1>Create an account</h1>
        <p>{error}</p>
        <label htmlFor='email'>E-mail</label>
        <br />
        <br />
        <input
          type='email'
          name='email'
          placeholder='name@gmail.com'
          onChange={handleEmailChange}
          value={email}
          required
        />
        <br />
        <br />
        <label htmlFor='password'>Password</label>
        <br />
        <br />
        <input
          type={inputType}
          name='password'
          placeholder='Choose your password'
          onChange={handlePasswordChange}
          required
        />
        <button type='button' onClick={showPassword}>
          Show password
        </button>
        <br />
        <br />
        <button type='submit'>Register</button>
      </form>
      <p>Or</p>
      <br />
      <button type='button' onClick={handleGoogle}>
        Sign in with google
      </button>
    </>
  );
};
