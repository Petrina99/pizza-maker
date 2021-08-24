import React from 'react';

import { useAuth } from 'modules/authentication/hooks';

import style from '../styles/signoutButton.module.css';

export const SignOutButton: React.FC = () => {
  const { signOut } = useAuth();
  const logout = () => {
    signOut();
  };

  return (
    <button type='button' onClick={logout} className={style.signoutBtn}>
      Log out
    </button>
  );
};
