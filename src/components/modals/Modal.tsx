import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import useModal from '../../hooks/useModal';

type ModalContainerProps = {
  onSave: () => void;
};
export const ModalContainer: React.FC<ModalContainerProps> = () => {
  const [context] = useModal();
  const { onClose } = useDisclosure();
  return (
    <Modal isOpen={context.isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{context.title}</ModalHeader>
        <ModalCloseButton />
        {context.content}
      </ModalContent>
    </Modal>
  );
};

export default Modal;
