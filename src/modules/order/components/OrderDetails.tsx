import React from 'react';

import { useSelector } from 'react-redux';

import { AppState } from '../../redux-store';

export const OrderDetails: React.FC = () => {
  // need qty, toppings, size, price and if discount is on
  const { discount } = useSelector((state: AppState) => state.discountReducer);
  const { size } = useSelector((state: AppState) => state.sizeReducer);
  const { toppings } = useSelector((state: AppState) => state.reducer);
  const { qty } = useSelector((state: AppState) => state.quantityReducer);
  const { price } = useSelector((state: AppState) => state.priceReducer);

  return (
    <>
      <div>
        <h3>Order details</h3>
        <p>TOPPINGS</p>
        <p>
          {toppings.sort((a, b) => a.id - b.id).map((topping) => topping.name)}{' '}
          size: {size}
        </p>
        <p>QTY: {qty}</p>
        <div>
          <p>Delivery</p>
          <p>Free delivery within 1 hour or you don't have to pay.</p>
        </div>
        <p>{discount ? 'Discount applied' : ''}</p>
        <button type='button'>Apply</button>
        <p>
          Total price <span>${price}</span>
        </p>
      </div>
      <div>
        <h3>Shipping information</h3>
        <input type='text' placeholder='Street name and number' />
        <input type='text' placeholder='City' />
        <input type='text' placeholder='Postal code' />
        <input type='text' placeholder='Country' />
      </div>
      <div>
        <h3>Payment details</h3>
        <select name='paymet'>
          <option value='COD'>Cash on delivery</option>
          <option value='CC'>Credit card</option>
        </select>
      </div>
      <button type='button'>Finish Order</button>
    </>
  );
};
