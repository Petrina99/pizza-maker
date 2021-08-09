import React from 'react';

import { OrderModal } from 'modules/order/components';
import { Header } from 'modules/configurator/components';

import style from './styles/order.module.css';

export const Order: React.FC = () => {
  return (
    <div className={style.orderView}>
      <Header />
      <OrderModal />
    </div>
  );
};
