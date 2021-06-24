import React, { useState } from 'react';

import { AppState } from '../../redux-store';
import { useDispatch, useSelector } from 'react-redux';

import { ErrorAction } from '../../redux';

import { useAuth, useFirebaseHooks } from '../../hooks';

import eye from '../../../images/visibility-button.svg';
import hide from '../../../images/hide.svg';

export const Register: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.errorReducer);
  //const { message } = useSelector((state: AppState) => state.messageReducer);

  const { register, googleSignIn } = useAuth();

  const { pushUser } = useFirebaseHooks('users');

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
    /* regex for pass validation */
    const regex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/g;

    const isValid = regex.test(password);

    if (!isValid) {
      dispatch(
        ErrorAction.add(
          'Your password should be 8+ characters long, contain a number and a special character',
        ),
      );
    }

    /* registers a user on firebase auth and adds them in the DB */
    if (isValid && email && password && !error) {
      register(email, password);
      pushUser(email, { email: email });
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
    <div className='reg-div'>
      <form onSubmit={handleSignUp} className='reg-form'>
        <h1>Create an account</h1>
        <div className='input-div'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='name@gmail.com'
            onChange={handleEmailChange}
            value={email}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type={inputType}
            name='password'
            placeholder='Choose your password'
            onChange={handlePasswordChange}
            required
          />
          <img
            src={inputType === 'password' ? eye : hide}
            onClick={showPassword}
          />
        </div>
        {error ? (
          <div className='error'>
            <p>{error}</p>
          </div>
        ) : (
          ''
        )}
        <div className='submit-div'>
          <button type='submit' className='reg-btn'>
            Register
          </button>
          <div className='reg-google'>
            <p>Or</p>
            <button type='button' onClick={handleGoogle}>
              Sign in with google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
