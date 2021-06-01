import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonAction } from '../../redux';

export const SignOut: React.FC = () => {
  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch();

  const logout = () => {
    setIsValid(true);
    dispatch(ButtonAction.add({ button: isValid, type: 'logout' }));
  };

  console.log(isValid);
  return <button onClick={logout}>Log out</button>;
};
