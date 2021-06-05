import { ActionUnion } from '../../redux-store';
import { MessageAction } from '../actions';

interface State {
  message: string;
}

const INITIAL_STATE: State = {
  message: '',
};

export const MessageReducer = (
  state: State = INITIAL_STATE,
  action: ActionUnion<typeof MessageAction>,
) => {
  switch (action.type) {
    case 'msg/add':
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
