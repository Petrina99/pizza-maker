import React from 'react';

import { useAuth } from 'modules/authentication/hooks';

export const SignOutButton: React.FC = () => {
  const { signOut } = useAuth();
  const logout = () => {
    signOut();
  };

  return (
    <button type='button' onClick={logout} className='logout-btn'>
      Log out
    </button>
  );
};
