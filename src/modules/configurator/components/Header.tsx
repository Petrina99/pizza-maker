import React from 'react';

import { SignOutButton } from 'modules/authentication';
import smallPizza from 'images/small-pizza.svg';

import { useDispatch } from 'react-redux';
import { OrderAction } from 'modules/order/redux';

import { useHistory } from 'react-router-dom';

import style from '../styles/header.module.css';

export const Header: React.FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClick = () => {
    history.push('/builder');
    dispatch(OrderAction.reset());
  };

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <p onClick={handleClick} className={style.p}>
          Pizz-á-tron
        </p>
        <div className={style.imgDiv}>
          <img src={smallPizza} alt='Small pizza' className={style.pizzaImg} />
        </div>
        <div className={style.btnDiv}>
          <SignOutButton />
        </div>
      </nav>
    </header>
  );
};
