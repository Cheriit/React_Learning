import React, { createContext, useState } from 'react';
import { ModalContextType } from 'types';
import PropTypes from 'prop-types';

const initialState: ModalContextType = {
  isOpen: false,
};

const ModalContext = createContext<
  [
    ModalContextType,
    React.Dispatch<React.SetStateAction<ModalContextType>>,
  ]
>([initialState, () => null]);

const ModalProvider: React.FC = (props) => {
  const [modal, setModal] = useState(initialState);

  return (
    <ModalContext.Provider value={[modal, setModal]} {...props} />
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node,
};

export { ModalContext, ModalProvider };
