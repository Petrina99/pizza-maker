import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux-store';

import { AuthAction } from 'modules/authentication/redux';

import { useAuth } from '../../hooks';

import eye from '../../../images/visibility-button.svg';
import hide from '../../../images/hide.svg';

//import { useHistory } from 'react-router-dom';

export const Login: React.FC = () => {
  const { error } = useSelector((state: AppState) => state.authReducer);

  const { login, rememberMe, googleSignIn } = useAuth();

  const dispatch = useDispatch();

  //const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setEmail(value);
    dispatch(AuthAction.error(''));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setPassword(value);
    dispatch(AuthAction.error(''));
  };

  const handleLogin = () => {
    if (email && password && !error) {
      login(email, password);
    }
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
    <div className='login-div'>
      <form className='login-form'>
        <h1>Sign in</h1>
        <div className='input-login'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email.'
            onChange={handleEmailChange}
            value={email}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type={inputType}
            name='password'
            placeholder='Enter your password'
            onChange={handlePasswordChange}
            value={password}
            required
          />
          <img
            src={inputType === 'password' ? eye : hide}
            onClick={showPassword}
          />
        </div>
        {error ? (
          <div className='error-login'>
            <p>{error}</p>
          </div>
        ) : (
          ''
        )}
        <div className='submit-login'>
          <button type='button' onClick={handleLogin} className='log-btn'>
            Login
          </button>
          <button
            type='button'
            onClick={setPersistence}
            className='remember-btn'
          >
            Remember me
          </button>
          <div className='log-google'>
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
