import React, { createContext, useReducer, useMemo } from 'react';
import {
  ListContextType,
  SortedItemFields,
  SortingDirections,
  ListAction,
} from 'types';
import PropTypes from 'prop-types';
import { listReducer } from 'reducers';
import list from 'context/list.json';

const initialState: ListContextType = {
  items: list,
  sortedBy: SortedItemFields.id,
  sortingDirection: SortingDirections.ascending,
  searchValue: '',
};

const ListContext = createContext<{
  state: ListContextType;
  dispatch: React.Dispatch<ListAction>;
}>({ state: initialState, dispatch: () => null });

const ListProvider: React.FC = (props) => {
  const [state, dispatch]: [
    ListContextType,
    React.Dispatch<ListAction>,
  ] = useReducer<React.Reducer<ListContextType, ListAction>>(
    listReducer,
    initialState,
  );

  const value: {
    state: ListContextType;
    dispatch: React.Dispatch<ListAction>;
  } = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <ListContext.Provider value={value} {...props} />;
};

ListProvider.propTypes = {
  children: PropTypes.node,
};

export { ListContext, initialState, ListProvider };
