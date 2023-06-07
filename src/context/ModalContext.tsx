/* eslint-disable no-unused-vars */
import { ReactNode, createContext, useContext, useState } from 'react';

type ModalContextType = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  selectedPostId: number | null;
  setSelectedPostId: (id: number | null) => void;
};
export type ModalProviderProps = {
  children: ReactNode | string;
};
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, selectedPostId, setSelectedPostId }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
