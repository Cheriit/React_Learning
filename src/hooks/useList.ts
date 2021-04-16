import { useContext } from 'react';
import { ListAction, ListActionType } from '../types/actionTypes';
import { ListContextType } from '../types/contextTypes';
import { ReducerHook } from '../types/hookTypes';
import { ListContext } from '../context/listContext';

const useList = (): ReducerHook<ListContextType, ListAction> => {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error(
      `useList hook must be used within a ListContextProvider`,
    );
  }

  const { state, dispatch } = context;

  const events = {
    addElement: () =>
      dispatch({ type: ListActionType.TEST, payload: { id: 2 } }),
  };

  return {
    state,
    dispatch,
    events,
  };
};

export default useList;
