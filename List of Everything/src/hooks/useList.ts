import { useContext } from 'react';
import { ListAction, ListContextType, ReducerHook } from 'types';
import { ListContext } from 'context';

export const useList = (): ReducerHook<
  ListContextType,
  ListAction
> => {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error(
      `useList hook must be used within a ListContextProvider`,
    );
  }

  const { state, dispatch } = context;

  return [state, dispatch];
};
