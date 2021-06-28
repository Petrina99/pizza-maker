import React, { useState } from 'react';

import { toppings } from '../const';

import { useDispatch } from 'react-redux';
import { OrderAction } from 'modules/order/redux';
export const ToppingButtons: React.FC = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const { id, active } = e.currentTarget.dataset;

    if (id && !active) {
      dispatch(OrderAction.toppingsAdd({ title: value, id: parseInt(id) }));
      setIsActive(true);
    }

    if (id && active) {
      dispatch(OrderAction.toppingsRemove(parseInt(id)));
      setIsActive(false);
    }
  };

  return (
    <div>
      {toppings.map((item) => (
        <button
          key={item.id}
          data-id={item.id}
          value={item.title}
          onClick={handleClick}
          data-active={isActive}
          type='button'
        >
          {item.image}
          {item.title}
        </button>
      ))}
    </div>
  );
};
