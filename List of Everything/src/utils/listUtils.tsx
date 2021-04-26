import _ from 'lodash';
import { ListItem, SortedItemFields, SortingDirections } from 'types';

export const getSortingDirection = (
  currentField: SortedItemFields,
  newField: SortedItemFields,
  currentDirection: SortingDirections,
): SortingDirections => {
  if (currentField !== newField) return SortingDirections.ascending;
  else {
    if (currentDirection === SortingDirections.ascending)
      return SortingDirections.descending;
    else return SortingDirections.ascending;
  }
};

export const sortList = (
  list: ListItem[],
  orderBy: SortedItemFields,
  direction: SortingDirections,
): ListItem[] => {
  const sortedList = _.sortBy(
    list,
    getSortField(orderBy),
    getSortDirection(direction),
  );
  if (direction === SortingDirections.ascending) return sortedList;
  else return sortedList.reverse();
};

const getSortField = (
  field: SortedItemFields,
): string | ((item: ListItem) => string) => {
  switch (field) {
    case SortedItemFields.name:
      return (item: ListItem) => item.name.toLowerCase();
    case SortedItemFields.ranking:
      return 'ranking';
    default:
      return 'id';
  }
};

const getSortDirection = (direction: SortingDirections): string => {
  if (direction === SortingDirections.descending) return 'desc';
  else return 'asc';
};
