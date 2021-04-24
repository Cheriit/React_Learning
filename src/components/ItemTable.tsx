import * as React from 'react';
import { Table, Tbody, Tr, Th, Thead } from '@chakra-ui/react';
import useList from '../hooks/useList';
import { ItemRow } from './ItemRow';
import useModal from '../hooks/useModal';
import { InfoModal } from './modals/InfoModal';

export const ItemTable: React.FC = () => {
  const [{ items }, ,] = useList();
  const [, setModalContext] = useModal();

  return (
    <>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th></Th>
            <Th
              onClick={() => {
                console.log('FILTER NAME');
                setModalContext({
                  isOpen: true,
                  title: 'TEST',
                  content: <InfoModal name="Test" />,
                });
              }}
            >
              Name
            </Th>
            <Th
              isNumeric
              onClick={() => {
                console.log('FILTER RANKING');
              }}
            >
              Ranking
            </Th>
            <Th>Description</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              onEdit={(id: number) => {
                console.log(`EDIT ${id}`);
              }}
              onDelete={(id: number) => {
                console.log(`DELETE ${id}`);
              }}
              onInfo={(id: number) => {
                console.log(`INFO ${id}`);
              }}
            />
          ))}
        </Tbody>
      </Table>
    </>
  );
};
