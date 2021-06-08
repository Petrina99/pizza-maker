import React, { useState } from 'react';

import pizza from '../../../images/pizza.svg';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux-store';
import { ErrorAction } from '../../redux';

import { Link } from 'react-router-dom';

import { usePrice } from '../../hooks';

export const Finisher: React.FC = () => {
  const { toppings } = useSelector((state: AppState) => state.reducer);
  const { size } = useSelector((state: AppState) => state.sizeReducer);
  const { discount } = useSelector((state: AppState) => state.discountReducer);
  const { error } = useSelector((state: AppState) => state.errorReducer);
  const { price } = useSelector((state: AppState) => state.priceReducer);

  const dispatch = useDispatch();

  console.log(discount);

  const [quantity, setQuantity] = useState(0);
  const [linkPath, setLinkPath] = useState('/info');

  const { setPrice } = usePrice(quantity, size);

  const handlePrice = () => {
    if (quantity !== 0 && size) {
      setPrice();
      dispatch(ErrorAction.add(''));
    }

    if (quantity === 0) {
      dispatch(
        ErrorAction.add('Please select the number of pizzas you want to order'),
      );
    }

    if (!size) {
      dispatch(ErrorAction.add('Please choose the size of your pizza'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.currentTarget;

    setQuantity(valueAsNumber);
  };

  const handleSubmit = () => {
    if (!toppings.length) {
      setLinkPath('/');
      dispatch(ErrorAction.add('Please select atleast 1 topping'));
    }

    if (!size) {
      setLinkPath('/');
      dispatch(ErrorAction.add('Please select the size of your pizza.'));
    }

    if (quantity === 0) {
      setLinkPath('/');
      dispatch(ErrorAction.add('Please select the number of pizzas you want.'));
    }

    if (quantity === 0 && !toppings.length && !size) {
      setLinkPath('/');
      dispatch(ErrorAction.add('Please fill out all of the choices.'));
    }

    if (price !== 0) {
      dispatch(ErrorAction.add(''));
      setLinkPath('/info');
    }
  };

  return (
    <>
      <div>
        <img src={pizza} />
        <br />
        <input type='number' onChange={handleChange} value={quantity} />
        <p>QTY</p>
        <button type='button' onClick={handlePrice}>
          Check price
        </button>
        <p>{error}</p>
        <p>${price}</p>
        <p>ORDER TOTAL</p>
        <Link to={linkPath}>
          <button type='button' onClick={handleSubmit}>
            Buy Pizza! Pizza!
          </button>
        </Link>
      </div>
    </>
  );
};
