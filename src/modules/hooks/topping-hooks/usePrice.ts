import { useSelector, useDispatch } from 'react-redux';
import { PriceAction } from '../../redux';

import { AppState } from '../../redux-store';

export const usePrice = (quantity: number, size: string) => {
  const { discount } = useSelector((state: AppState) => state.discountReducer);
  const { toppings } = useSelector((state: AppState) => state.reducer);

  const dispatch = useDispatch();

  const setPrice = () => {
    const startingPrice = 1;

    let sizePrice = 2;

    if (size === 'M') {
      sizePrice = sizePrice + 3;
    }

    if (size === 'L') {
      sizePrice = sizePrice + 7;
    }

    const toppingPrice = toppings.length * 3;
    const priceWithoutDiscount = startingPrice + toppingPrice + sizePrice;

    const quantityMultiply = priceWithoutDiscount * quantity;

    const discountNumber = discount.valid ? quantityMultiply * 0.1 : 0;

    const finalPrice = quantityMultiply - discountNumber;
    dispatch(PriceAction.add(finalPrice));
  };

  return {
    setPrice,
  };
};
