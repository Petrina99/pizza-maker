import { ActionUnion } from '../../redux-store';
import { PriceAction } from '../actions';

interface State {
  price: number;
}

const INITIAL_STATE: State = {
  price: 0,
};

export const PriceReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof PriceAction>,
) => {
  switch (action.type) {
    case 'price/add':
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};
