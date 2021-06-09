import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { DiscountAction } from '../../redux';
import { AppState } from '../../redux-store';

import { useFirebaseHooks } from '../../hooks';

import { useHistory } from 'react-router-dom';

export const OrderDetails: React.FC = () => {
  // need qty, toppings, size, price and if discount is on
  const { discount } = useSelector((state: AppState) => state.discountReducer);
  const { size } = useSelector((state: AppState) => state.sizeReducer);
  const { toppings } = useSelector((state: AppState) => state.reducer);
  const { qty } = useSelector((state: AppState) => state.quantityReducer);
  const { price } = useSelector((state: AppState) => state.priceReducer);
  const { user } = useSelector((state: AppState) => state.userReducer);

  const { pushOrder } = useFirebaseHooks('orders');

  const dispatch = useDispatch();

  const history = useHistory();

  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState(0);
  const [country, setCountry] = useState('');
  const [payment, setPayment] = useState('COD');
  const [error, setError] = useState('');
  const [ccNumber, setCCNumber] = useState(0);
  const [input, setInput] = useState('');

  const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setAdress(value);
    setError('');
  };

  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setCity(value);
    setError('');
  };

  const handlePostal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value.length !== 5) {
      setError('Invalid postal code.');
    }

    if (value.length === 5) {
      setError('');
      setPostalCode(parseInt(value));
    }
  };

  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setCountry(value);
    setError('');
  };

  const handlePayment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;

    setPayment(value);
  };

  const handleFinish = () => {
    if (!error) {
      pushOrder({
        user: user.email,
        adress: adress,
        city: city,
        postalCode: postalCode,
        country: country,
        price: price,
        size: size,
        discount: discount.valid,
        payment: payment,
        CC: payment === 'CC' ? ccNumber : 'Payed with cash',
        toppings: toppings.sort((a, b) => a.id - b.id).map((item) => item.name),
      });
      history.push('/success');
    }

    if (payment === 'CC' && isNaN(ccNumber)) {
      setError('Please enter a valid credit card number.');
    }

    if (isNaN(postalCode)) {
      setError('Postal code has to be a number');
    }

    if (!adress || !city || !postalCode || !country) {
      setError('Please fill out all the required fields.');
    }
  };

  const handleCC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value.length !== 16) {
      setError('Credit card number not valid.');
    }

    if (value.length === 16) {
      setError('');
      setCCNumber(parseInt(value));
    }
  };

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
      <div>
        <h3>Order details</h3>
        <p>TOPPINGS</p>
        <p>
          {toppings.sort((a, b) => a.id - b.id).map((item) => item.name + ', ')}
          Size: {size}
        </p>
        <p>QTY: {qty}</p>
        <div>
          <p>Delivery</p>
          <p>Free delivery within 1 hour or you don't have to pay.</p>
        </div>
        {discount.valid ? (
          'Discount applied'
        ) : (
          <div>
            <input
              type='text'
              placeholder='Enter discount code'
              onChange={handleInput}
              value={input}
            />
            <button type='button' onClick={handleClick}>
              Apply
            </button>
          </div>
        )}
        <p>
          Total price <span>${price}</span>
        </p>
      </div>
      <form>
        <div>
          <h3>Shipping information</h3>
          <input
            type='text'
            name='adress'
            placeholder='Street name and number'
            required
            onChange={handleAdress}
          />
          <input
            type='text'
            name='city'
            placeholder='City'
            required
            onChange={handleCity}
          />
          <input
            type='text'
            name='postal'
            placeholder='Postal code'
            required
            onChange={handlePostal}
          />
          <input
            type='text'
            name='country'
            placeholder='Country'
            required
            onChange={handleCountry}
          />
          <h3>Payment details</h3>
          <select name='paymet' required onChange={handlePayment}>
            <option value='COD'>Cash on delivery</option>
            <option value='CC'>Credit card</option>
          </select>
          {payment === 'CC' ? (
            <input type='text' name='CC number' onChange={handleCC} />
          ) : (
            ''
          )}
        </div>
      </form>
      <button type='button' onClick={handleFinish} value={payment}>
        Finish Order
      </button>
      {error}
    </>
  );
};
