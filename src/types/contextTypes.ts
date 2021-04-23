import { SortedItemFields, SortingDirections } from './enums';

type ListItem = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  ranking: number;
};

type ListContextType = {
  items: ListItem[];
  sortedBy: SortedItemFields;
  sortingDirection: SortingDirections;
  searchValue: string | null;
  isModalOpen: boolean;
};

export type { ListItem, ListContextType };
