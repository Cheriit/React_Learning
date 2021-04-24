import React, { createContext, useReducer, useMemo } from 'react';
import { ListContextType } from '../types/contextTypes';
import { SortedItemFields, SortingDirections } from '../types/enums';
import { ListAction } from '../types/actionTypes';
import PropTypes from 'prop-types';
import { listReducer } from '../reducers/listReducer';

const initialState: ListContextType = {
  items: [
    {
      id: 1,
      name: 'test',
      description: 'Lorem ',
      imageUrl:
        'https://pngimg.com/uploads/pokeball/pokeball_PNG8.png',
      ranking: 3,
    },
  ],
  sortedBy: SortedItemFields.id,
  sortingDirection: SortingDirections.ascending,
  searchValue: null,
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
