import { ActionUnion } from '../../redux-store';
import { UserAction } from '../actions';
import { UserModel } from '../models';
interface State {
  user: UserModel;
}

const INITIAL_STATE: State = {
  user: {
    email: '',
    message: '',
  },
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
