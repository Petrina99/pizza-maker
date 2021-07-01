import { useSelector } from 'react-redux';
import { AppState } from 'modules/redux-store/models';

export const useOrder = () => {
  const { quantity, toppings, size, discount } = useSelector(
    (state: AppState) => state.orderReducer,
  );

  const getCurrentPrice = () => {
    const price = 3;
    const toppingPrice = toppings.length * price;
    const discountPrice = discount ? 3 : 0;

    const sizePrice =
      size === 'S' ? 2 : 0 || size === 'M' ? 4 : 0 || size === 'L' ? 6 : 0;

    return (toppingPrice + sizePrice - discountPrice) * quantity;
  };

  return {
    getCurrentPrice,
  };
};
