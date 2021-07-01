import { useSelector } from 'react-redux';
import { AppState } from 'modules/redux-store/models';

export const useOrder = () => {
  const { quantity, toppings, toppingPrice, sizePrice, discount } = useSelector(
    (state: AppState) => state.orderReducer,
  );

  const getCurrentPrice = () => {
    const discountPrice = discount ? 3 : 0;

    console.log(
      'toppingsLength: ' +
        toppings.length +
        ' toppingPrice: ' +
        toppingPrice +
        ' sizePrice: ' +
        sizePrice,
    );
    return (toppingPrice + sizePrice - discountPrice) * quantity;
  };

  return {
    getCurrentPrice,
  };
};
