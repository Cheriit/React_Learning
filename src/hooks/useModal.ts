import { useContext } from 'react';
import { ModalContextType, ContextHook } from 'types';
import { ModalContext } from 'context';

export const useModal = (): ContextHook<ModalContextType> => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      `useList hook must be used within a ListContextProvider`,
    );
  }

  return context;
};
