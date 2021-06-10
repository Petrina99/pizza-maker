import React from 'react';

import { OrderDetails, Header } from '../../modules';
export const Order: React.FC = () => {
  return (
    <div className='order-div'>
      <Header />
      <OrderDetails />
    </div>
  );
};
