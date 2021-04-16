import { initialState } from '../context/listContext';
import { ListAction, ListActionType } from '../types/actionTypes';
import { ListContextType } from '../types/contextTypes';

const listReducer: React.Reducer<ListContextType, ListAction> = (
  state: ListContextType = initialState,
  action: ListAction,
): ListContextType => {
  switch (action.type) {
    case ListActionType.TEST:
      return {
        ...state,
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

export { listReducer };
