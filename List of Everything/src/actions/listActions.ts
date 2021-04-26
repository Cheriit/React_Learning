import { ListActionType, ListAction, SortedItemFields } from 'types';

export const addItem = (
  name: string,
  description: string,
  imageUrl: string,
  ranking: number,
): ListAction => {
  return {
    type: ListActionType.ADD,
    payload: { name, description, imageUrl, ranking },
  };
};

export const removeItem = (id: number): ListAction => {
  return {
    type: ListActionType.REMOVE,
    payload: { id },
  };
};

export const editItem = (
  id: number,
  name: string,
  description: string,
  imageUrl: string,
  ranking: number,
): ListAction => {
  return {
    type: ListActionType.EDIT,
    payload: { id, name, description, imageUrl, ranking },
  };
};

export const sortItems = (field: SortedItemFields): ListAction => {
  return {
    type: ListActionType.SORT,
    payload: { field },
  };
};

export const searchItems = (name: string): ListAction => {
  return {
    type: ListActionType.SEARCH,
    payload: { name },
  };
};
