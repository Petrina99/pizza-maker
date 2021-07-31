import React from 'react';

import { useDispatch } from 'react-redux';
import { OrderAction } from 'modules/order/redux';

import { SuccessPage } from 'modules/success';
import { Header } from 'modules/configurator/components';

import { useHistory } from 'react-router-dom';

import style from './styles/successView.module.css';

export const Success: React.FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleAnother = () => {
    dispatch(OrderAction.reset());
    history.push('/builder');
  };

  return (
    <div className={style.successView}>
      <Header />
      <SuccessPage />
      <div className='buy-another'>
        <button
          type='button'
          onClick={handleAnother}
          className='buy-another-btn'
        >
          Buy another
        </button>
      </div>
    </div>
  );
};
