import React, { useState } from 'react';

import pizza from '../../../images/pizza.svg';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux-store';
import { QuantityAction } from '../../redux';

import { useHistory } from 'react-router-dom';

import { usePrice } from '../../hooks';

export const Finisher: React.FC = () => {
  const { toppings } = useSelector((state: AppState) => state.reducer);
  const { size } = useSelector((state: AppState) => state.sizeReducer);
  const { price } = useSelector((state: AppState) => state.priceReducer);
  const { qty } = useSelector((state: AppState) => state.quantityReducer);
  //fix link path and routing
  const dispatch = useDispatch();

  const history = useHistory();

  const { setPrice } = usePrice(qty, size);

  const [error, setError] = useState('');

  const handlePrice = () => {
    if (qty !== 0 && toppings.length) {
      setPrice();
      setError('');
    }

    if (qty === 0) {
      setError('Please select the number of pizzas you want to order');
      dispatch(QuantityAction.add(0));
    }

    if (!toppings.length) {
      setError('Please select atleast 1 topping');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (parseInt(value) === 0) {
      setError('You have to order atleast 1 pizza.');
    }

    if (parseInt(value) !== 0) {
      dispatch(QuantityAction.add(parseInt(value)));
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (price === 0) {
      setError('Please click on the check price before buying.');
    }

    if (!toppings.length) {
      setError('Please select atleast 1 topping.');
    }

    if (price !== 0 && error === '') {
      history.push('/order');
    }
  };

  return (
    <div className='finisher'>
      <img src={pizza} />
      <br />
      <form onSubmit={handleSubmit} className='finisher-form'>
        <div className='qty'>
          <input type='number' value={qty} onChange={handleChange} required />
          <p>QTY</p>
        </div>
        <div className='price-check'>
          <button type='button' onClick={handlePrice}>
            Check price
          </button>
          <p>{error}</p>
        </div>
        <div className='price-total'>
          <p>${price}</p>
          <p>ORDER TOTAL</p>
        </div>
        <button type='submit' className='buy-btn'>
          Buy Pizza! Pizza!
        </button>
      </form>
    </div>
  );
};
