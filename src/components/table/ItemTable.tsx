import * as React from 'react';
import { Table, Tbody, Tr, Th, Thead } from '@chakra-ui/react';
import useList from '../../hooks/useList';
import { ItemTableRow } from './ItemTableRow';
import useModal from '../../hooks/useModal';
import { SortedItemFields } from '../../types/enums';
import { sortList } from '../../utils/listUtils';
import { EditModal } from '../modals/EditModal';
import { DeleteModal } from '../modals/DeleteModal';
import { ListActionType } from '../../types/actionTypes';
import { SortableColumnHeader } from './SortableColumnHeader';
import { ListItem } from '../../types/contextTypes';

export const ItemTable: React.FC = () => {
  const [
    { items, sortedBy, sortingDirection, searchValue },
    dispatch,
  ] = useList();
  const [, setModalContext] = useModal();

  const openEditModal = (item: ListItem) =>
    setModalContext({
      isOpen: true,
      title: `${item.name} - edit`,
      content: <EditModal item={item} />,
    });

  const openDeleteModal = (item: ListItem) =>
    setModalContext({
      isOpen: true,
      title: `${item.name} - delete`,
      content: <DeleteModal item={item} />,
    });

  const setSearchField = (field: SortedItemFields) => {
    dispatch({ type: ListActionType.SORT, payload: { field } });
  };

  return (
    <>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th></Th>
            <SortableColumnHeader
              field={SortedItemFields.name}
              onClick={setSearchField}
              name="name"
              sortedBy={sortedBy}
              sortingDirection={sortingDirection}
            />
            <SortableColumnHeader
              field={SortedItemFields.ranking}
              onClick={setSearchField}
              name="ranking"
              sortedBy={sortedBy}
              sortingDirection={sortingDirection}
            />
            <Th>Description</Th>
            <Th isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortList(items, sortedBy, sortingDirection)
            .filter((item) => item.name.includes(searchValue))
            .map((item) => (
              <ItemTableRow
                key={item.id}
                item={item}
                onEdit={() => openEditModal(item)}
                onDelete={() => openDeleteModal(item)}
              />
            ))}
        </Tbody>
      </Table>
    </>
  );
};
