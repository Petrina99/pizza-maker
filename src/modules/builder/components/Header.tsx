import React from 'react';

import { SignOut } from '../../auth';
import smallPizza from '../../../images/small-pizza.svg';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux-store';
import {
  Actions,
  SizeAction,
  QuantityAction,
  DiscountAction,
  PriceAction,
} from '../../redux';

import { useHistory } from 'react-router-dom';

export const Header: React.FC = () => {
  const history = useHistory();

  const { toppings } = useSelector((state: AppState) => state.reducer);
  const { discount } = useSelector((state: AppState) => state.discountReducer);

  const dispatch = useDispatch();

  const handleClick = () => {
    history.push('/builder');
    toppings.map((item) => dispatch(Actions.remove(item.id)));
    dispatch(SizeAction.add('S'));
    dispatch(QuantityAction.add(1));
    dispatch(
      DiscountAction.add({ code: discount.code, valid: false, message: '' }),
    );
    dispatch(PriceAction.add(0));
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
