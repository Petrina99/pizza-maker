import { useSelector, useDispatch } from 'react-redux';
import { OrderAction } from 'modules/builder/redux';

import { AppState } from '../../redux-store';

export const usePrice = (quantity: number, size: string | null) => {
  const { orders } = useSelector((state: AppState) => state.orderReducer);
  const { toppings } = useSelector((state: AppState) => state.toppingReducer);

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

    const discountNumber = orders.discount ? quantityMultiply * 0.2 : 0;

    const finalPrice = quantityMultiply - discountNumber;
    dispatch(OrderAction.price(finalPrice));
  };

  return {
    setPrice,
  };
};
