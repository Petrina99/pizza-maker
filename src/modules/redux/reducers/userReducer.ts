import { ActionUnion } from '../../redux-store';
import { UserAction } from '../actions';
import { User } from '../models';

interface State {
  user: User | undefined | string;
}

const INITIAL_STATE: State = {
  user: undefined,
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
