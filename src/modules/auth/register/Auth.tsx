import React from 'react';
import { Register, Login, SignOut } from './index';

import { useSelector } from 'react-redux';
import { AppState } from '../../redux-store';

export const Auth: React.FC = () => {
  const { user } = useSelector((state: AppState) => state.userReducer);
  console.log(user);

  return (
    <>
      <Register />
      <Login />
      <SignOut />
    </>
  );
};
