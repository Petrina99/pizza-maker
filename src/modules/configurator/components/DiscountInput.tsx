import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { OrderAction } from 'modules/order/redux';

import style from '../styles/discount.module.css';

export const DiscountInput: React.FC = () => {
  const [input, setInput] = useState('');
  const [discountMessage, setDiscountMessage] = useState('');

  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setInput(value);
  };

  const handleClick = () => {
    if (input === 'pizza2021') {
      dispatch(OrderAction.update({ discount: true }));
      setDiscountMessage('Success. 20 % discount applied.');
    }

    if (input !== 'pizza2021') {
      dispatch(OrderAction.update({ discount: false }));
      setDiscountMessage('You have entered an invalid code.');
    }
  };

  return (
    <>
      <p className={style.p}>Get the discount</p>
      <section className={style.discountSection}>
        <div className={style.inputDiv}>
          <input
            type='text'
            id='discount'
            placeholder='Enter discount code'
            onChange={handleInput}
            className={style.input}
          />
          <button
            type='button'
            value={input}
            onClick={handleClick}
            className={style.discountBtn}
          >
            Apply
          </button>
        </div>
      </section>
      <p className={style.message}>{discountMessage}</p>
    </>
  );
};
