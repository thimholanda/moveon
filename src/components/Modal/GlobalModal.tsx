import { Heading, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useEffect } from "react";

import { useModal } from "../../hooks/useModal";

export function GlobalModal({ onClose, isOpen }) {
  const { modalComponent } = useModal();

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size={"xl"}>
      <ModalOverlay bgColor={"rgba(6, 6, 7, .96)"} />
      <ModalContent
        borderRadius={10}
        m={5}
        border={"1px solid white"}
        borderColor={"gray.400"}
        bg={"rgba(179, 181, 198, 0.1)"}
        position={"relative"}
      >
        {modalComponent}
      </ModalContent>
    </Modal>
  );
}
