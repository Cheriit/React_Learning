import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react';
import useModal from '../../hooks/useModal';

type ModalContainerProps = {
  onSave: () => void;
};

export const ModalContainer: React.FC<ModalContainerProps> = () => {
  const [context, setContext] = useModal();

  return (
    <Modal
      isOpen={context.isOpen}
      onClose={() => setContext({ isOpen: false })}
    >
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
