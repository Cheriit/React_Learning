import React from 'react';
import { AddIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import useList from '../../hooks/useList';
import { ListActionType } from '../../types/actionTypes';
import useModal from '../../hooks/useModal';
import { NewItemModal } from '../modals/NewItemModal';

export const SearchTable: React.FC = () => {
  const [{ searchValue }, dispatch] = useList();
  const [, setModal] = useModal();
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: ListActionType.SEARCH,
      payload: { name: event.currentTarget.value },
    });
  };
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search value"
        value={searchValue}
        onChange={handleChange}
      />
      <InputRightElement width="6rem">
        <Button
          size="md"
          onClick={() =>
            setModal({
              isOpen: true,
              title: 'Add new item',
              content: <NewItemModal />,
            })
          }
        >
          <AddIcon mr={3} /> New
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
