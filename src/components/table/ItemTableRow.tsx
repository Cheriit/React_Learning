import React from 'react';
import PropTypes from 'prop-types';
import { Tr, Td, Button, Avatar } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { ListItem } from '../../types/contextTypes';

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
      <Td>{item.description}</Td>
      <Td isNumeric>
        <Button onClick={() => onEdit(item.id)} mr={3}>
          <EditIcon mr={1} />
          Edit
        </Button>
        <Button onClick={() => onDelete(item.id)} mr={3}>
          <DeleteIcon mr={1} />
          Delete
        </Button>
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
