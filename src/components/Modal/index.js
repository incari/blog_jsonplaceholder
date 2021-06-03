
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import FloatingButton from "components/FloatingButton";
import React, { useEffect, useRef } from "react";

export default function OpenModal({
  children,
  title,
  isComment,
  closeModal,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();

  useEffect(() => {
    if (closeModal) onClose();
  });
  return (
    <>
      <span onClick={onOpen}>
        <FloatingButton isComment={isComment} />
      </span>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {children}
        </ModalContent>
      </Modal>
    </>
  );
}
