import React from 'react';
import { ShippingInfo, OrderDetails } from './index';

import style from '../styles/orderModal.module.css';

export const OrderModal: React.FC = () => {
  return (
    <div className={style.orderModal}>
      <p className={style.title}>Almost done!</p>
      <OrderDetails />
      <ShippingInfo />
    </div>
  );
};
