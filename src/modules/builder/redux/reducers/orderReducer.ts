import { ActionUnion } from 'modules/redux-store';
import { OrderAction } from '../actions';

interface State {
  orders: {
    quantity: number;
    size: string | null;
    discount: boolean;
    price: number;
    address: string | null;
    city: string | null;
    country: string | null;
    postalCode: number;
    payment: string;
    ccNumber?: number;
    error: string | null;
  };
}

const INITIAL_STATE: State = {
  orders: {
    quantity: 0,
    size: null,
    discount: false,
    price: 0,
    address: null,
    city: null,
    country: null,
    postalCode: 0,
    payment: 'COD',
    ccNumber: 0,
    error: null,
  },
};

export const OrderReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof OrderAction>,
) => {
  switch (action.type) {
    case 'order/error':
      return {
        ...state,
        order: (state.orders.error = action.payload),
      };
    case 'order/quantity':
      return {
        ...state,
        order: (state.orders.quantity = action.payload),
      };
    case 'order/price':
      return {
        ...state,
        order: (state.orders.price = action.payload),
      };
    case 'order/size':
      return {
        ...state,
        order: (state.orders.size = action.payload),
      };
    case 'order/discount':
      return {
        ...state,
        order: (state.orders.discount = action.payload),
      };
    case 'order/address':
      return {
        ...state,
        order: (state.orders.address = action.payload),
      };
    case 'order/city':
      return {
        ...state,
        order: (state.orders.city = action.payload),
      };
    case 'order/country':
      return {
        ...state,
        order: (state.orders.country = action.payload),
      };
    case 'order/postalCode':
      return {
        ...state,
        order: (state.orders.postalCode = action.payload),
      };
    case 'order/payment':
      return {
        ...state,
        order: (state.orders.payment = action.payload),
      };
    case 'order/ccNumber':
      return {
        ...state,
        order: (state.orders.ccNumber = action.payload),
      };
    case 'order/reset':
      return INITIAL_STATE;
    default:
      return state;
  }
};
