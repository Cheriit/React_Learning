import * as React from 'react';
import {
  Table,
  Tbody,
  Th,
  Thead,
  useDisclosure,
} from '@chakra-ui/react';
import useList from '../hooks/useList';
import { ItemRow } from './ItemRow';

type ItemRowProps = {
  item: ListItem;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onInfo: (id: number) => void;
};

export const ItemTable: React.FC = () => {
  const [{ items }, ,] = useList();
  const { onOpen } = useDisclosure({ id: 'modal' });

  return (
    <>
      <Table variant="striped">
        <Thead>
          <Th></Th>
          <Th
            onClick={() => {
              console.log('FILTER NAME');
              onOpen();
            }}
          >
            Name
          </Th>
          <Th
            isNumeric
            onClick={() => {
              console.log('FILTER RANKING');
              onOpen();
            }}
          >
            Ranking
          </Th>
          <Th>Description</Th>
          <Th></Th>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              onEdit={(id: number) => {
                console.log('EDIT');
              }}
              onDelete={(id: number) => {
                console.log('DELETE');
              }}
              onInfo={(id: number) => {
                console.log('INFO');
              }}
            />
          ))}
        </Tbody>
      </Table>
    </>
  );
};
