/* eslint-disable no-unused-vars */
import { ReactNode, createContext, useContext, useState } from 'react';

type EditModalContextType = {
  selectedPostEdidId: number | null;
  setSelectedPostEdidId: (id: number | null) => void;
  showEditModal: boolean;
  setShowEditModal: (show: boolean) => void;
};

const EditModalContext = createContext<EditModalContextType | undefined>(
  undefined,
);
export type EditModalProviderProps = {
  children: ReactNode | string;
};
export const EditModalProvider = ({ children }: EditModalProviderProps) => {
  const [selectedPostEdidId, setSelectedPostEdidId] = useState<number | null>(
    null,
  );
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <EditModalContext.Provider
      value={{
        selectedPostEdidId,
        setSelectedPostEdidId,
        showEditModal,
        setShowEditModal,
      }}
    >
      {children}
    </EditModalContext.Provider>
  );
};

export const useEditModal = () => {
  const context = useContext(EditModalContext);
  if (!context) {
    throw new Error('useEditModal must be used within an EditModalProvider');
  }
  return context;
};
