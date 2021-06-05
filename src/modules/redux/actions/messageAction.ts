import { createAction } from '../../redux-store';

export const MessageAction = {
  add: (item: string) => createAction('msg/add', item),
};
