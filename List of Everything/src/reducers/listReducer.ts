import _ from 'lodash';
import { initialState } from 'context';
import { ListAction, ListActionType, ListContextType } from 'types';
import { getSortingDirection } from 'utils';

const listReducer: React.Reducer<ListContextType, ListAction> = (
  state: ListContextType = initialState,
  action: ListAction,
): ListContextType => {
  switch (action.type) {
    case ListActionType.ADD:
      const items = state.items;
      const ids = items.map((item) => item.id);

      items.push({
        id: (_.max(ids) ?? 0) + 1,
        ...action.payload,
      });

      return {
        ...state,
        items,
      };
    case ListActionType.REMOVE:
      return {
        ...state,
        items: state.items.filter(
          ({ id }) => id !== action.payload.id,
        ),
      };
    case ListActionType.EDIT:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...action.payload }
            : item,
        ),
      };
    case ListActionType.SORT:
      return {
        ...state,
        sortedBy: action.payload.field,
        sortingDirection: getSortingDirection(
          state.sortedBy,
          action.payload.field,
          state.sortingDirection,
        ),
      };
    case ListActionType.SEARCH:
      return {
        ...state,
        searchValue: action.payload.name.toLowerCase(),
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

export { listReducer };
