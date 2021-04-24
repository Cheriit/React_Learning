import { useContext } from 'react';
import { ModalContextType } from '../types/contextTypes';
import { ContextHook } from '../types/hookTypes';
import { ModalContext } from '../context/modalContext';

const useModal = (): ContextHook<ModalContextType> => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      `useList hook must be used within a ListContextProvider`,
    );
  }

  return context;
};

export default useModal;
