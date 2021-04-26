import React from 'react';
import PropTypes from 'prop-types';
import { Tr, Td, Button, Avatar, HStack } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { ListItem } from 'types';

type ItemRowProps = {
  item: ListItem;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export const ItemTableRow: React.FC<ItemRowProps> = (props) => {
  const { item, onEdit, onDelete } = props;
  return (
    <Tr>
      <Td>
        <Avatar name={item.name} src={item.imageUrl} />
      </Td>
      <Td>{item.name}</Td>
      <Td isNumeric>{item.ranking}</Td>
      <Td fontSize={'md'}>{item.description}</Td>
      <Td isNumeric>
        <HStack spacing="10px">
          <Button onClick={() => onEdit(item.id)}>
            <EditIcon mr={1} />
            Edit
          </Button>
          <Button onClick={() => onDelete(item.id)}>
            <DeleteIcon mr={1} />
            Delete
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};

ItemTableRow.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    ranking: PropTypes.number.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
