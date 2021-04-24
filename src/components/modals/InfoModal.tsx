import React from 'react';
import PropTypes from 'prop-types';
import { Button, ModalBody, ModalFooter } from '@chakra-ui/react';
import useModal from '../../hooks/useModal';

type InfoModalProps = {
  name: string;
};
export const InfoModal: React.FC<InfoModalProps> = (props) => {
  const [context, setContext] = useModal();
  return (
    <form>
      <ModalBody>{props.name}</ModalBody>

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
        <Button variant="ghost">Secondary Action</Button>
      </ModalFooter>
    </form>
  );
};

InfoModal.propTypes = {
  name: PropTypes.string.isRequired,
};
