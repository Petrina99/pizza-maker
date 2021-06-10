import { ActionUnion } from '../../redux-store';
import { QuantityAction } from '../actions';

interface State {
  qty: number;
}

const INITIAL_STATE: State = {
  qty: 1,
};

export const QuantityReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof QuantityAction>,
) => {
  switch (action.type) {
    case 'qty/add':
      return {
        ...state,
        qty: action.payload,
      };
    default:
      return state;
  }
};
