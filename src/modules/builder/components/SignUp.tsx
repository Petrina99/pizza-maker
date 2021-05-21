import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { UserAction } from '../redux';
import { useFirebaseHooks } from '../../firebase';

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const isValid = Boolean(email);
  const isPwValid = Boolean(password);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setEmail(value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;

    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (value.length >= 8 && regex.test(value)) {
      setPassword(value);
    }
  }

  function onSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    if (!isValid && !isPwValid) {
      return;
    }

    dispatch(UserAction.add({ email, password }));
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">E-mail</label>
      <br />
      <br />
      <input
        type="email"
        name="email"
        placeholder="name@gmail.com"
        onChange={handleEmailChange}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <br />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Choose your password"
        onChange={handlePasswordChange}
        value={password}
      />
      <button type="submit">Sign In</button>
      <button onClick={}>Remember me</button>
    </form>
  );
};
