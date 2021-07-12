import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const ShippingInfo: React.FC = () => {
  type FormValues = {
    address: string;
    city: string;
    postalCode: number;
    country: string;
  };

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState(11111);
  const [country, setCountry] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = (
    data: FormValues,
    e: React.BaseSyntheticEvent<unknown> | undefined,
  ) => {
    e?.preventDefault();

    console.log('data', data);
    setAddress(data.address);
    setCity(data.city);
    setPostalCode(data.postalCode);
    setCountry(data.country);
  };

  const onError = (
    errors: unknown,
    e: React.BaseSyntheticEvent<unknown> | undefined,
  ) => {
    e?.preventDefault();
    console.log('errors', errors);
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
        {...register('city', { required: 'City field is required.' })}
        id='city'
        placeholder='City'
      />
      {errors.city && <p>{errors.city.message}</p>}
      <input
        type='number'
        {...register('postalCode', {
          required: 'Postal code field is required.',
          minLength: { value: 5, message: 'Please enter a valid postal code.' },
          maxLength: { value: 5, message: 'Please enter a valid postal code.' },
          valueAsNumber: true,
        })}
        id='postal-code'
        placeholder='Postal Code'
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
