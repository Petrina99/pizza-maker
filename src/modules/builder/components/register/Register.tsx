import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ButtonAction, UserAction } from '../../redux';
import { AppState } from '../../../redux-store';
export const Register: React.FC = () => {
  const { errors } = useSelector((state: AppState) => state.errorReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [newError, setNewError] = useState(false);
  const [inputType, setInputType] = useState('password');

  function addError() {
    if (!errors.length) {
      setNewError(false);
    } else {
      setNewError(true);
    }
  }

  useEffect(() => {
    addError();
  }, [errors.length]);

  useEffect(() => {
    if (newError) {
      setError(errors[errors.length - 1].error);
    } else {
      setError('');
    }
  }, [error]);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setEmail(value);
    setError('');
    setNewError(false);
  }

  const hasSpecialFunc = (value: string) => {
    const regex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{7,}$/i;

    const hasSpecials = regex.test(value);
    if (hasSpecials) {
      return true;
    }
    return false;
  };

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    if (hasSpecialFunc(value) === true) {
      setPassword(value);
      setError('');
      setNewError(false);
    }
    setError(
      'Password must be atleast 8 characters long and it has to contain 1 number and 1 special character.',
    );
    setNewError(false);
  }

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    hasSpecialFunc(password);

    if (email && password) {
      dispatch(
        UserAction.add({ email: email, password: password, hasAccount: false }),
      );
      dispatch(ButtonAction.add({ button: true, type: 'register' }));
    }

    setError(
      'Password must be atleast 8 characters long and it has to contain 1 number and 1 special character.',
    );
    setEmail('');
    setPassword('');
  }

  function showPassword() {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
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
    </>
  );
};
