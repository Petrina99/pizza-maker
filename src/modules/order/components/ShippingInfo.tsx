import React from 'react';
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  DeepMap,
  FieldError,
} from 'react-hook-form';

import { useSelector } from 'react-redux';
import { AppState } from 'modules/redux-store/models';

import { useFirebaseHooks } from 'modules/firebase/hooks';

import { useHistory } from 'react-router';

import { useOrder } from 'modules/order/hooks';

import style from '../styles/shippingInfo.module.css';

type FormValues = {
  address: string;
  city: string;
  postalCode: number;
  country: string;
};
export const ShippingInfo: React.FC = () => {
  const { pushOrder } = useFirebaseHooks('orders');

  const { toppings, pizzaData } = useSelector(
    (state: AppState) => state.orderReducer,
  );
  const { user } = useSelector((state: AppState) => state.authReducer);

  const history = useHistory();
  const { getCurrentPrice } = useOrder();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log('data', data);
    pushOrder({
      ...data,
      user: user?.email,
      price: getCurrentPrice(),
      size: pizzaData.size,
      quantity: pizzaData.quantity,
      dicount: pizzaData.discount,
      payment: 'Cash on delivery.',
      CC: 'Cash on delivery.',
      toppings: toppings.sort((a, b) => a.id - b.id).map((item) => item.title),
    });
    history.push('/success');
  };

  const onError: SubmitErrorHandler<FormValues> = (
    errors: DeepMap<FormValues, FieldError>,
  ) => {
    console.log(errors);
  };

  return (
    <div className={style.shippingInfo}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <p className={style.shippingTitle}>Shipping information</p>
        <input
          {...register('address', {
            required: 'Street name and number field is required.',
          })}
          id='address'
          placeholder='Street name and number'
          className={style.streetInput}
        />
        {errors.address && (
          <p className={style.errorMessage}>{errors.address.message}</p>
        )}
        <div className={style.cityPostalDiv}>
          <input
            {...register('city', {
              required: 'City field is required.',
            })}
            id='city'
            placeholder='City'
            className={style.cityPostalInput}
          />
          <input
            type='number'
            {...register('postalCode', {
              required: 'Postal code field is required.',
              minLength: {
                value: 5,
                message: 'Please enter a valid postal code.',
              },
              maxLength: {
                value: 5,
                message: 'Please enter a valid postal code.',
              },
            })}
            id='postal-code'
            placeholder='Postal Code'
            className={style.cityPostalInput}
          />
        </div>
        {errors.city && (
          <p className={style.errorMessage}>{errors.city.message}</p>
        )}
        {errors.postalCode && (
          <p className={style.errorMessage}>{errors.postalCode.message}</p>
        )}
        <input
          {...register('country', { required: 'Country filed is required.' })}
          id='country'
          placeholder='Country'
          className={style.countryInput}
        />
        {errors.country && (
          <p className={style.errorMessage}>{errors.country.message}</p>
        )}
        <p className={style.paymentDetails}>Payment details</p>
        <p className={style.paymentMethod}>Cash on delivery</p>
        <div className={style.submitDiv}>
          <button type='submit' className={style.finishBtn}>
            Finish order
          </button>
        </div>
      </form>
    </div>
  );
};
