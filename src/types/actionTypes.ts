import { SortedItemFields } from './enums';

enum ListActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  EDIT = 'EDIT',
  SORT = 'SORT',
  SEARCH = 'SEARCH',
}

type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type ListPayload = {
  [ListActionType.ADD]: {
    name: string;
    description: string;
    imageUrl: string;
    ranking: number;
  };
  [ListActionType.REMOVE]: {
    id: number;
  };
  [ListActionType.EDIT]: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    ranking: number;
  };
  [ListActionType.SORT]: {
    field: SortedItemFields;
  };
  [ListActionType.SEARCH]: {
    name: string;
  };
};

type ListAction = ActionMap<ListPayload>[keyof ActionMap<ListPayload>];

export type { ListAction };
export { ListActionType };
