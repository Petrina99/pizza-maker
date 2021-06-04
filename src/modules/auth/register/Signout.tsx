import React from 'react';

import { useAuth } from '../../hooks';

export const SignOut: React.FC = () => {
  const { signOut } = useAuth();
  const logout = () => {
    signOut();
  };

  return <button onClick={logout}>Log out</button>;
};
