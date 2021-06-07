import { ActionUnion } from '../../redux-store';
import { UserAction } from '../actions';
interface State {
  user: string | null;
}

const INITIAL_STATE: State = {
  user: '',
};

export const UserReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof UserAction>,
) => {
  switch (action.type) {
    case 'user/add':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
