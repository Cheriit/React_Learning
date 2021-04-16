import { ListActionType, ListAction } from '../types/actionTypes';

export const test = (): ListAction => {
  return {
    type: ListActionType.TEST2,
    payload: { content: 'test' },
  };
};
