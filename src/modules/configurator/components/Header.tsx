import React from 'react';

import { SignOut } from 'modules/authentication';
import smallPizza from 'images/small-pizza.svg';

import { useDispatch } from 'react-redux';
import { OrderAction } from 'modules/order/redux';

import { useHistory } from 'react-router-dom';

export const Header: React.FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClick = () => {
    history.push('/builder');
    dispatch(OrderAction.reset());
  };

  return (
    <div className='header-struct'>
      <div className='header'>
        <p onClick={handleClick} className='pizza-tron'>
          Pizz-á-tron
        </p>
        <img src={smallPizza} alt='Small pizza' />
        <SignOut />
      </div>
    </div>
  );
};
