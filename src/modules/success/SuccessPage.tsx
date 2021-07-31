import React from 'react';

import pizza from 'images/pizza-success.svg';

import style from './styles/success.module.css';

export const SuccessPage: React.FC = () => {
  return (
    <div className={style.successDiv}>
      <div className={style.imgDiv}>
        <img src={pizza} alt='Pizza success' className={style.img} />
      </div>
      <div className={style.textDiv}>
        <div className={style.boldDiv}>
          <p className={style.title}>Your Pizza! Pizza!</p>
          <p className={style.title}>is on its way!</p>
        </div>
        <div className={style.smallTextDiv}>
          <p className={style.p}>You should be enjoying your meal in no</p>
          <p className={style.p}>more than 45 minutes.</p>
        </div>
      </div>
    </div>
  );
};
