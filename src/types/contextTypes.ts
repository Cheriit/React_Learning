import { SortedItemFields, SortingDirections } from './enums';

type ListItem = {
  id: number;
  name: string;
  imageUrl: string;
  ranking: number;
};

type ListContextType = {
  items: ListItem[];
  sortedBy: SortedItemFields;
  sortingDirection: SortingDirections;
  searchValue: string | null;
};

export type { ListItem, ListContextType };
