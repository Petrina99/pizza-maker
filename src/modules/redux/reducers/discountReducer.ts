import { ActionUnion } from '../../redux-store';
import { DiscountAction } from '../actions';
import { DiscountModel } from '../models';
interface State {
  discount: DiscountModel;
}

const INITIAL_STATE: State = {
  discount: {
    code: '',
    valid: false,
    message: '',
  },
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
