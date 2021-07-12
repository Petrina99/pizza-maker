import React from 'react';

import { OrderModal } from 'modules/order/components';
import { Header } from 'modules/configurator/components';

export const Order: React.FC = () => {
  return (
    <div className='order-div'>
      <Header />
      <OrderModal />
    </div>
  );
};
