import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { OrderAction } from 'modules/order/redux';

export const Discount: React.FC = () => {
  const [input, setInput] = useState('');
  const [discountMessage, setDiscountMessage] = useState('');

  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setInput(value);
  };

  const handleClick = () => {
    if (input === 'pizza2021') {
      dispatch(OrderAction.discount(true));
      setDiscountMessage('Success. 20 % discount applied.');
    }

    if (input !== 'pizza2021') {
      dispatch(OrderAction.discount(false));
      setDiscountMessage('You have entered an invalid code.');
    }
  };

  return (
    <div className='dsc-div'>
      <p className='dsc-title'>Get the discount</p>
      <div className='discount-input'>
        <input
          type='text'
          id='discount'
          placeholder='Enter discount code'
          onChange={handleInput}
        />
        <button type='button' value={input} onClick={handleClick}>
          Apply
        </button>
      </div>
      <p className='dsc-msg'>{discountMessage}</p>
    </div>
  );
};
