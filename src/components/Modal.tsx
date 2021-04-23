import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ModalContainer: React.FC = (props) => {
  const { isOpen, onClose } = useDisclosure({ id: 'modal' });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>TEST</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          {props.onSave !== null && (
            <Button variant="ghost">Secondary Action</Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ModalContainer.propTypes = {
  onSave: PropTypes.func,
};

export default Modal;
