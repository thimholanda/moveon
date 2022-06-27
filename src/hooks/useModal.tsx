import { useDisclosure } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface UserModalContextData {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  modalComponent: ReactNode;
  defineModalComponent: (element: ReactNode) => void;
}

interface UserModalProviderProps {
  children: ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const UseModalContext = createContext<UserModalContextData>(
  {} as UserModalContextData
);

export function UseModalProvider({
  children,
  isOpen,
  onClose,
  onOpen,
}: UserModalProviderProps) {
  const [modalComponent, setModalComponent] = useState<ReactNode>(
    {} as ReactNode
  );

  function defineModalComponent(element: ReactNode) {
    console.log(element);
    setModalComponent(element);
  }
  return (
    <UseModalContext.Provider
      value={{ isOpen, onOpen, onClose, defineModalComponent, modalComponent }}
    >
      {children}
    </UseModalContext.Provider>
  );
}

export function useModal() {
  return useContext(UseModalContext);
}
