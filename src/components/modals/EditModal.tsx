import React from 'react';
import PropTypes from 'prop-types';
import { Button, ModalBody, ModalFooter } from '@chakra-ui/react';
import useModal from '../../hooks/useModal';
import useList from '../../hooks/useList';
import { ListItem } from '../../types/contextTypes';

type EditModalProps = {
  item: ListItem;
};
export const EditModal: React.FC<EditModalProps> = ({ item }) => {
  const [context, setContext] = useModal();
  const [, dispatch] = useList();

  return (
    <>
      <ModalBody>{item?.name}</ModalBody>

      <ModalFooter>
        <Button
          colorScheme="blue"
          mr={3}
          onClick={() => {
            setContext({ ...context, isOpen: false });
          }}
        >
          Close
        </Button>
      </ModalFooter>
    </>
  );
};

EditModal.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    ranking: PropTypes.number.isRequired,
  }).isRequired,
};
