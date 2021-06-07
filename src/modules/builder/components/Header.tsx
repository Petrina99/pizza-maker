import React from 'react';

import { SignOut } from '../../auth';
import smallPizza from '../../../images/small-pizza.svg';
export const Header: React.FC = () => {
  return (
    <>
      <p>Pizz-á-tron</p>
      <img src={smallPizza} alt='Small pizza' />
      <SignOut />
      <br />
    </>
  );
};
