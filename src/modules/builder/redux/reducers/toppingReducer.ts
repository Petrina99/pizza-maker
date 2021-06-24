import { ActionUnion } from 'modules/redux-store';
import { Topping } from '../models';
import { ToppingAction } from '../actions';

interface State {
  toppings: Topping[];
}

const INITIAL_STATE: State = {
  toppings: [],
};

export const ToppingReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof ToppingAction>,
) => {
  switch (action.type) {
    case 'topping/add':
      return {
        ...state,
        toppings: [...state.toppings, action.payload],
      };
    case 'topping/remove':
      return {
        ...state,
        toppings: state.toppings.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    case 'topping/reset':
      return INITIAL_STATE;
    default:
      return state;
  }
};
