import { useSelector } from 'react-redux';
import { AppState } from 'modules/redux-store/models';

export const useOrder = () => {
  const { pizzaData, toppings } = useSelector(
    (state: AppState) => state.orderReducer,
  );

  const getCurrentPrice = () => {
    const discountPrice = pizzaData.discount ? 3 : 0;
    const price = 3;
    const toppingPrice = toppings.length * price;
    let sizePrice = 0;
    switch (pizzaData.size) {
      case 'S':
        sizePrice = 2;
        break;
      case 'M':
        sizePrice = 4;
        break;
      case 'L':
        sizePrice = 6;
        break;
      default:
        sizePrice = 0;
    }

    console.log(
      'toppingsLength: ' +
        toppings.length +
        ' toppingPrice: ' +
        toppingPrice +
        ' sizePrice: ' +
        sizePrice,
    );
    return (toppingPrice + sizePrice - discountPrice) * pizzaData.quantity;
  };

  return {
    getCurrentPrice,
  };
};
