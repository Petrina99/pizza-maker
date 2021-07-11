import React from 'react';
import { ShippingInfo, OrderDetails } from './index';

export const OrderModal: React.FC = () => {
  return (
    <div className='order-modal'>
      <OrderDetails />
      <ShippingInfo />
    </div>
  );
};
