import React from 'react';
import PropTypes from 'prop-types';
import { Button, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useModal, useList } from 'hooks';
import { ListItem } from 'types';
import { removeItem } from 'actions';

type DeleteModalProps = {
  item: ListItem;
};
export const DeleteModal: React.FC<DeleteModalProps> = ({ item }) => {
  const [, setContext] = useModal();
  const [, dispatch] = useList();

  return (
    <>
      <ModalBody>
        Are you sure, you want to delete item &quot;{item?.name}&quot;
        from list?
      </ModalBody>

      <ModalFooter>
        <Button
          colorScheme="red"
          mr={3}
          onClick={() => {
            dispatch(removeItem(item.id));
            setContext({ isOpen: false });
          }}
        >
          Delete
        </Button>

        <Button
          mr={3}
          onClick={() => {
            setContext({ isOpen: false });
          }}
        >
          Close
        </Button>
      </ModalFooter>
    </>
  );
};

DeleteModal.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    ranking: PropTypes.number.isRequired,
  }).isRequired,
};
