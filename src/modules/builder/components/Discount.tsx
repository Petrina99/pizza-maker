import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux-store';
import { DiscountAction } from '../../redux';

import { useFirebaseHooks } from '../../hooks';
export const Discount: React.FC = () => {
  const [input, setInput] = useState('');
  const { discount } = useSelector((state: AppState) => state.discountReducer);

  const { getAll } = useFirebaseHooks('discount');

  const dispatch = useDispatch();

  useEffect(() => {
    getAll().then((item) =>
      dispatch(
        DiscountAction.add({ code: item[0].code, valid: false, message: '' }),
      ),
    );
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setInput(value);
    dispatch(
      DiscountAction.add({
        code: discount.code,
        valid: false,
        message: '',
      }),
    );
  };

  const handleClick = () => {
    if (input === discount.code) {
      dispatch(
        DiscountAction.add({
          code: discount.code,
          valid: true,
          message: 'Success.',
        }),
      );
    }

    if (input !== discount.code) {
      dispatch(
        DiscountAction.add({
          code: discount.code,
          valid: false,
          message: 'Error. Wrong code.',
        }),
      );
    }
  };

  return (
    <>
      <h2>Get the discount</h2>
      <input
        type='text'
        id='discount'
        placeholder='Enter discount code'
        onChange={handleInput}
      />
      <button type='button' value={input} onClick={handleClick}>
        Apply
      </button>
      <p>{discount.message}</p>
    </>
  );
};
