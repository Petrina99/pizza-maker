import { ActionUnion } from '../../redux-store';
import { Topping } from '../models';
import { Actions } from './action';

interface State {
  toppings: Topping[];
}

const INITIAL_STATE: State = {
  toppings: [],
};

export const PizzaReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof Actions>,
) => {
  switch (action.type) {
    case 'type/add':
      return {
        ...state,
        toppings: [...state.toppings, action.payload],
      };
    case 'type/remove':
      return {
        ...state,
        toppings: state.toppings.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
