import React from 'react';

import { toppings } from '../const';

export const ToppingButtons: React.FC = () => {
  return (
    <div>
      {toppings.map((item) => (
        <button key={item.id} value={item.title}>
          {item.image}
          {item.title}
        </button>
      ))}
    </div>
  );
};
