import { ActionUnion } from '../../redux-store';
import { DiscountAction } from '../actions';

interface State {
  discount: boolean;
}

const INITIAL_STATE: State = {
  discount: false,
};

export const DiscountReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof DiscountAction>,
) => {
  switch (action.type) {
    case 'discount/add':
      return {
        ...state,
        discount: action.payload,
      };
    default:
      return state;
  }
};
