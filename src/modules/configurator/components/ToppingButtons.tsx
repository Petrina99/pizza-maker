import React from 'react';

import { toppingArray } from '../const';

import style from '../styles/buttons.module.css';

import { useTopping } from 'modules/configurator/hooks';

export const ToppingButtons: React.FC = () => {
  const { handleTopping, egg, corn, chilli, meat, shrooms, pineapple, bacon } =
    useTopping();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const { id } = e.currentTarget.dataset;

    if (id) {
      handleTopping(value, parseInt(id));
    }
  };

  /* ovo sam vratio da bude ovako bez da mapiram toppingArray jer nisam znao kako da drugacije mjenjam stilove kad je button aktivan a kad nije */
  return (
    <div className={style.buttonDiv}>
      <button
        data-id={toppingArray[0].id}
        key={toppingArray[0].id}
        value={toppingArray[0].title}
        onClick={handleClick}
        name={toppingArray[0].title}
        type='button'
        className={chilli ? style.btnOn : style.btnOff}
      >
        <div className={chilli ? style.btnImgDivOn : style.btnImgDivOff}>
          <img src={toppingArray[0].image} className={style.btnImg} />
        </div>
        <p className={style.btnP}>{toppingArray[0].title}</p>
      </button>
      <button
        data-id={toppingArray[1].id}
        key={toppingArray[1].id}
        value={toppingArray[1].title}
        onClick={handleClick}
        name={toppingArray[1].title}
        type='button'
        className={corn ? style.btnOn : style.btnOff}
      >
        <div className={corn ? style.btnImgDivOn : style.btnImgDivOff}>
          <img src={toppingArray[1].image} className={style.btnImg} />
        </div>
        <p className={style.btnP}>{toppingArray[1].title}</p>
      </button>
      <button
        data-id={toppingArray[2].id}
        key={toppingArray[2].id}
        value={toppingArray[2].title}
        onClick={handleClick}
        name={toppingArray[2].title}
        type='button'
        className={egg ? style.btnOn : style.btnOff}
      >
        <div className={egg ? style.btnImgDivOn : style.btnImgDivOff}>
          <img src={toppingArray[2].image} className={style.btnImg} />
        </div>
        <p className={style.btnP}>{toppingArray[2].title}</p>
      </button>
      <button
        data-id={toppingArray[3].id}
        key={toppingArray[3].id}
        value={toppingArray[3].title}
        onClick={handleClick}
        name={toppingArray[3].title}
        type='button'
        className={pineapple ? style.btnOn : style.btnOff}
      >
        <div className={pineapple ? style.btnImgDivOn : style.btnImgDivOff}>
          <img src={toppingArray[3].image} className={style.btnImg} />
        </div>
        <p className={style.btnP}>{toppingArray[3].title}</p>
      </button>
      <button
        data-id={toppingArray[4].id}
        key={toppingArray[4].id}
        value={toppingArray[4].title}
        onClick={handleClick}
        name={toppingArray[4].title}
        type='button'
        className={meat ? style.btnOn : style.btnOff}
      >
        <div className={meat ? style.btnImgDivOn : style.btnImgDivOff}>
          <img src={toppingArray[4].image} className={style.btnImg} />
        </div>
        <p className={style.btnP}>{toppingArray[4].title}</p>
      </button>
      <button
        data-id={toppingArray[5].id}
        key={toppingArray[5].id}
        value={toppingArray[5].title}
        onClick={handleClick}
        name={toppingArray[5].title}
        type='button'
        className={shrooms ? style.btnOn : style.btnOff}
      >
        <div className={shrooms ? style.btnImgDivOn : style.btnImgDivOff}>
          <img src={toppingArray[5].image} className={style.btnImg} />
        </div>
        <p className={style.btnP}>{toppingArray[5].title}</p>
      </button>
      <button
        data-id={toppingArray[6].id}
        key={toppingArray[6].id}
        value={toppingArray[6].title}
        onClick={handleClick}
        name={toppingArray[6].title}
        type='button'
        className={bacon ? style.btnOn : style.btnOff}
      >
        <div className={bacon ? style.btnImgDivOn : style.btnImgDivOff}>
          <img src={toppingArray[6].image} className={style.btnImg} />
        </div>
        <p className={style.btnP}>{toppingArray[6].title}</p>
      </button>
    </div>
  );
};
