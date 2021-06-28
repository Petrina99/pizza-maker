import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { OrderAction } from 'modules/order/redux';
import { AppState } from 'modules/redux-store';

import { useFirebaseHooks } from 'modules/firebase/hooks';

import { useHistory } from 'react-router-dom';
export const OrderDetails: React.FC = () => {
  // need qty, toppings, size, price and if discount is on
  const {
    toppings,
    size,
    error,
    discount,
    address,
    city,
    postalCode,
    country,
    quantity,
    payment,
    ccNumber,
  } = useSelector((state: AppState) => state.orderReducer);
  const { user } = useSelector((state: AppState) => state.authReducer);

  const dispatch = useDispatch();

  const { pushOrder } = useFirebaseHooks('orders');

  const history = useHistory();

  const [input, setInput] = useState('');
  const [discountMessage, setMessage] = useState('');

  const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    dispatch(OrderAction.address(value));
    dispatch(OrderAction.error(''));
  };

  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    dispatch(OrderAction.city(value));
  };

  const handlePostal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value.length !== 5 && isNaN(parseInt(value))) {
      dispatch(OrderAction.error('Invalid postal code!'));
    }

    if (value.length === 5) {
      dispatch(OrderAction.error(''));
      dispatch(OrderAction.postalCode(parseInt(value)));
    }
  };

  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    dispatch(OrderAction.country(value));
    dispatch(OrderAction.error(''));
  };

  const handlePayment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;

    dispatch(OrderAction.payment(value));
    dispatch(OrderAction.error(''));
  };

  const handleFinish = () => {
    if (!error && address && city && postalCode && country) {
      pushOrder({
        user: user,
        address: address,
        city: city,
        postalCode: postalCode,
        country: country,
        price: 2,
        size: size,
        quantity: quantity,
        discount: discount,
        payment: payment,
        CC: payment === 'CC' ? ccNumber : 'Payed with cash',
        toppings: toppings
          .sort((a, b) => a.id - b.id)
          .map((item) => item.title),
      });
      history.push('/success');
    }

    if (payment === 'CC' && !ccNumber) {
      dispatch(OrderAction.error('Enter a valid credit card number.'));
    }

    if (!postalCode) {
      dispatch(OrderAction.error('Postal code has to be a number.'));
    }

    if (!address || !city || !postalCode || !country) {
      dispatch(OrderAction.error('Please fill out all the required fields.'));
    }
  };

  const handleCC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value.length !== 16 && isNaN(parseInt(value))) {
      dispatch(OrderAction.error('Credit card number not valid.'));
    }

    if (value.length === 16) {
      dispatch(OrderAction.error(''));
      dispatch(OrderAction.ccNumber(parseInt(value)));
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setInput(value);
  };

  const handleClick = () => {
    if (input === 'pizza2021') {
      dispatch(OrderAction.discount(true));
      setMessage('Success. 20% discount applied.');
    }

    if (input !== 'pizza2021') {
      dispatch(OrderAction.discount(false));
      setMessage('You have entered an invalid code.');
    }
  };

  return (
    <div className='order'>
      <p className='order-title'>Almost done!</p>
      <div className='info'>
        <p>Order details</p>
        <p>TOPPINGS</p>
        <p>
          {toppings
            .sort((a, b) => a.id - b.id)
            .map((item) => item.title + ', ')}
          Size: {size}
        </p>
        <p className='qty-numb'>QTY: {quantity}</p>
        <div className='delivery'>
          <p>Delivery</p>
          <p>Free delivery within 1 hour or you don't have to pay.</p>
        </div>
        {discount ? (
          <p className='discount-valid'>Discount applied.</p>
        ) : (
          <div className='discount-apply'>
            <input
              type='text'
              placeholder='Enter discount code'
              onChange={handleInput}
              value={input}
            />
            <button type='button' onClick={handleClick}>
              Apply
            </button>
            <p>{discountMessage}</p>
          </div>
        )}
        <div className='info-price'>
          <p>Total price</p>
          <p>$2</p>
        </div>
      </div>
      <form className='order-form'>
        <p>Shipping information</p>
        <input
          type='text'
          name='adress'
          placeholder='Street name and number'
          required
          onChange={handleAdress}
          className='adress'
        />
        <input
          type='text'
          name='city'
          placeholder='City'
          required
          onChange={handleCity}
          className='city'
        />
        <input
          type='text'
          name='postal'
          placeholder='Postal code'
          required
          onChange={handlePostal}
          className='postal'
        />
        <input
          type='text'
          name='country'
          placeholder='Country'
          required
          onChange={handleCountry}
          className='country'
        />
        <p className='payment-label'>Payment details</p>
        <select name='paymet' required onChange={handlePayment}>
          <option value='COD'>Cash on delivery</option>
          <option value='CC'>Credit card</option>
        </select>
        {payment === 'CC' ? (
          <input
            type='text'
            name='CC number'
            placeholder='Your Credit card number.'
            onChange={handleCC}
            className='cc-number'
          />
        ) : (
          ''
        )}
        <button
          type='button'
          onClick={handleFinish}
          value={payment}
          className='finish-btn'
        >
          Finish Order
        </button>
      </form>
      <p className='error-order'>{error}</p>
    </div>
  );
};
