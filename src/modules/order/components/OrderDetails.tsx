import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { OrderAction } from 'modules';
import { AppState } from 'modules/redux-store';

import { usePushOrder } from 'modules/order/hooks';

import { useHistory } from 'react-router-dom';
export const OrderDetails: React.FC = () => {
  // need qty, toppings, size, price and if discount is on
  const { orders } = useSelector((state: AppState) => state.orderReducer);
  const { toppings } = useSelector((state: AppState) => state.toppingReducer);
  const { user } = useSelector((state: AppState) => state.authReducer);

  const { pushOrder } = usePushOrder('orders');

  const dispatch = useDispatch();

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
    if (
      !orders.error &&
      orders.address &&
      orders.city &&
      orders.postalCode &&
      orders.country
    ) {
      pushOrder({
        user: user,
        address: orders.address,
        city: orders.city,
        postalCode: orders.postalCode,
        country: orders.country,
        price: orders.price,
        size: orders.size,
        quantity: orders.quantity,
        discount: orders.discount,
        payment: orders.payment,
        CC: orders.payment === 'CC' ? orders.ccNumber : 'Payed with cash',
        toppings: toppings.sort((a, b) => a.id - b.id).map((item) => item.name),
      });
      history.push('/success');
    }

    if (orders.payment === 'CC' && !orders.ccNumber) {
      dispatch(OrderAction.error('Enter a valid credit card number.'));
    }

    if (!orders.postalCode) {
      dispatch(OrderAction.error('Postal code has to be a number.'));
    }

    if (
      !orders.address ||
      !orders.city ||
      !orders.postalCode ||
      !orders.country
    ) {
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
          {toppings.sort((a, b) => a.id - b.id).map((item) => item.name + ', ')}
          Size: {orders.size}
        </p>
        <p className='qty-numb'>QTY: {orders.quantity}</p>
        <div className='delivery'>
          <p>Delivery</p>
          <p>Free delivery within 1 hour or you don't have to pay.</p>
        </div>
        {orders.discount ? (
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
          <p>${orders.price}</p>
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
        {orders.payment === 'CC' ? (
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
          value={orders.payment}
          className='finish-btn'
        >
          Finish Order
        </button>
      </form>
      <p className='error-order'>{orders.error}</p>
    </div>
  );
};
