import { ActionUnion } from '../../redux-store';
import { User } from '../models';
import { UserAction } from './userAction';

interface State {
  user: User[];
}

const INITIAL_STATE: State = {
  user: [],
};

export const UserReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof UserAction>,
) => {
  switch (action.type) {
    case 'user/add':
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case 'user/remove':
      return {
        ...state,
        user: state.user.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
