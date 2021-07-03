import { ActionUnion } from 'modules/redux-store';
import { OrderAction } from './orderAction';
import { OrderModel } from './models';

const INITIAL_STATE: OrderModel = {
  toppings: [],
  quantity: 1,
  size: 'S',
  discount: false,
  address: null,
  city: null,
  country: null,
  postalCode: 0,
  payment: 'COD',
  ccNumber: 0,
  error: '',
};

export const OrderReducer = (
  state: OrderModel = INITIAL_STATE,
  action: ActionUnion<typeof OrderAction>,
) => {
  switch (action.type) {
    case 'order/error':
      return {
        ...state,
        error: action.payload,
      };
    case 'order/quantity':
      return {
        ...state,
        quantity: action.payload,
      };
    case 'order/size':
      return {
        ...state,
        size: action.payload,
      };
    case 'order/discount':
      return {
        ...state,
        discount: action.payload,
      };
    case 'order/address':
      return {
        ...state,
        address: action.payload,
      };
    case 'order/city':
      return {
        ...state,
        city: action.payload,
      };
    case 'order/country':
      return {
        ...state,
        country: action.payload,
      };
    case 'order/postalCode':
      return {
        ...state,
        postalCode: action.payload,
      };
    case 'order/payment':
      return {
        ...state,
        payment: action.payload,
      };
    case 'order/ccNumber':
      return {
        ...state,
        ccNumber: action.payload,
      };
    case 'order/toppings':
      return {
        ...state,
        toppings: [...state.toppings, action.payload],
      };
    case 'order/toppingsRemove':
      return {
        ...state,
        toppings: state.toppings.filter(
          (topping) => topping.id !== action.payload.id,
        ),
      };
    case 'order/reset':
      return INITIAL_STATE;
    default:
      return state;
  }
};
