import React from 'react';
import PropTypes from 'prop-types';
import { Tr, Td, Button, Avatar } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, InfoIcon } from '@chakra-ui/icons';
import { ListItem } from '../types/contextTypes';

type ItemRowProps = {
  item: ListItem;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onInfo: (id: number) => void;
};

export const ItemRow: React.FC<ItemRowProps> = (props) => {
  const { item, onEdit, onDelete, onInfo } = props;
  return (
    <Tr>
      <Td>
        <Avatar name={item.name} src={item.imageUrl} />
      </Td>
      <Td>{item.name}</Td>
      <Td isNumeric>{item.ranking}</Td>
      <Td>{item.description}</Td>
      <Td>
        <Button onClick={() => onEdit(item.id)} mr={3}>
          <EditIcon />
          Edit
        </Button>
        <Button onClick={() => onDelete(item.id)} mr={3}>
          <DeleteIcon />
          Delete
        </Button>
        <Button onClick={() => onInfo(item.id)}>
          <InfoIcon />
          Info
        </Button>
      </Td>
    </Tr>
  );
};

ItemRow.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    ranking: PropTypes.number.isRequired,
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onInfo: PropTypes.func.isRequired,
};
