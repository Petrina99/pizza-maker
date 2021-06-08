import { ActionUnion } from '../../redux-store';
import { SizeAction } from '../actions';

interface State {
  size: string;
}

const INITIAL_STATE: State = {
  size: 'S',
};

export const SizeReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof SizeAction>,
) => {
  switch (action.type) {
    case 'size/add':
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
};
