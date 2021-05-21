import { ActionUnion } from '../../redux-store';
import { User } from '../models';
import { UserAction } from './userAction';

interface State {
  users: User[];
}

const INITIAL_STATE: State = {
  users: [],
};

export const UserReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof UserAction>,
) => {
  switch (action.type) {
    case 'user/add':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
