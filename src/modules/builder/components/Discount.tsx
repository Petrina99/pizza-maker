import React, { useState } from 'react';

export const Discount: React.FC = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const discount = 'pizza2021';
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setInput(value);
    setMessage('');
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    if (value === discount) {
      setMessage('Success! Discount applied.');
    }

    if (value !== discount) {
      setMessage('Oops! Wrong code.');
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
      <p>{message}</p>
    </>
  );
};
