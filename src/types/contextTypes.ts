import { ReactElement } from 'react';
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
};

type ModalContextType = {
  title?: string;
  content?: ReactElement;
  isOpen: boolean;
};

export type { ListItem, ListContextType, ModalContextType };
