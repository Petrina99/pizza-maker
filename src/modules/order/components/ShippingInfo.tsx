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

import { OrderAction } from 'modules/order/redux';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router';
export const ShippingInfo: React.FC = () => {
  const { pushOrder } = useFirebaseHooks('orders');

  const { toppings, size, discount, quantity } = useSelector(
    (state: AppState) => state.orderReducer,
  );
  const { user } = useSelector((state: AppState) => state.authReducer);

  type FormValues = {
    address: string;
    city: string;
    postalCode: number;
    country: string;
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log('data', data);
    dispatch(OrderAction.address(data.address));
    dispatch(OrderAction.postalCode(data.postalCode));
    dispatch(OrderAction.city(data.city));
    dispatch(OrderAction.country(data.country));
    pushOrder({
      user: user?.email,
      address: data.address,
      city: data.city,
      postalCode: data.postalCode,
      country: data.country,
      price: 2,
      size: size,
      quantity: quantity,
      discount: discount,
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
    <form className='shipping-form' onSubmit={handleSubmit(onSubmit, onError)}>
      <p>Shipping information</p>
      <input
        {...register('address', {
          required: 'Street name and number field is required.',
        })}
        id='address'
        placeholder='Street name and number'
      />
      {errors.address && <p>{errors.address.message}</p>}
      <input
        {...register('city', {
          required: 'City field is required.',
        })}
        id='city'
        placeholder='City'
      />
      {errors.city && <p>{errors.city.message}</p>}
      <input
        type='number'
        {...register('postalCode', {
          required: 'Postal code field is required.',
          minLength: { value: 5, message: 'Please enter a valid postal code' },
          valueAsNumber: true,
        })}
      />
      {errors.postalCode && <p>{errors.postalCode.message}</p>}
      <input
        {...register('country', { required: 'Country filed is required.' })}
        id='country'
        placeholder='Country'
      />
      {errors.country && <p>{errors.country.message}</p>}
      <p>Payment details</p>
      <p>Cash on delivery</p>
      <button type='submit'>Finish order</button>
    </form>
  );
};
