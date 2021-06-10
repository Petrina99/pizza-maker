import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  Actions,
  SizeAction,
  QuantityAction,
  DiscountAction,
  PriceAction,
} from '../../modules';
import { AppState } from '../../modules';

import { Header, SuccessPage } from '../../modules';

import { useHistory } from 'react-router-dom';
export const Success: React.FC = () => {
  const { toppings } = useSelector((state: AppState) => state.reducer);
  const { discount } = useSelector((state: AppState) => state.discountReducer);

  const history = useHistory();

  const dispatch = useDispatch();
  const handleAnother = () => {
    toppings.map((item) => dispatch(Actions.remove(item.id)));
    dispatch(SizeAction.add('S'));
    dispatch(QuantityAction.add(1));
    dispatch(
      DiscountAction.add({ code: discount.code, valid: false, message: '' }),
    );
    dispatch(PriceAction.add(0));
    history.push('/builder');
  };

  return (
    <div className='success-sect'>
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
