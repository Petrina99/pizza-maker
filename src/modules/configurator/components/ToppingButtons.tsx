import React, { useState } from 'react';

import { toppingArray } from '../const';

import { useDispatch, useSelector } from 'react-redux';
import { OrderAction } from 'modules/order/redux';

import { AppState } from 'modules/redux-store/models';

import style from '../styles/buttons.module.css';

export const ToppingButtons: React.FC = () => {
  const dispatch = useDispatch();

  const { toppings } = useSelector((state: AppState) => state.orderReducer);

  const [isActive, setIsActive] = useState(false);
  const btnStyle = isActive ? style.btnOn : style.btnOff;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const { id } = e.currentTarget.dataset;

    if (id) {
      const currentId = toppings.find((item) => item.id === parseInt(id));
      if (!currentId) {
        dispatch(
          OrderAction.toppingsAdd({
            title: value,
            id: parseInt(id),
          }),
        );
        setIsActive(true);
      }

      if (currentId) {
        dispatch(OrderAction.toppingsRemove(parseInt(id)));
        setIsActive(false);
      }
    }
  };

  return (
    <div className={style.buttonDiv}>
      {toppingArray.map((topping) => (
        <button
          data-id={topping.id}
          key={topping.id}
          value={topping.title}
          onClick={handleClick}
          name={topping.title}
          type='button'
          className={btnStyle}
        >
          <div className={style.btnImgDivOff}>
            <img src={topping.image} className={style.btnImg} />
          </div>
          <p className={style.btnP}>{topping.title}</p>
        </button>
      ))}
    </div>
  );
};
