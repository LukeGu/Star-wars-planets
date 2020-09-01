import React from "react";
// components
import { ModalWrapper, ModalBody, ModalHeader, ModalContent, ModalTitle, ModalCloseBtn, Backdrop } from "./styled";

const Modal = (props: { onClose: () => void; children: React.ReactNode }) => {
  return (
    <ModalWrapper>
      <ModalBody>
        <ModalHeader>
          <ModalTitle>Update Planet&apos;s Info</ModalTitle>
          <ModalCloseBtn onClick={props.onClose}>×</ModalCloseBtn>
        </ModalHeader>
        <ModalContent>{props.children}</ModalContent>
      </ModalBody>
      <Backdrop onMouseDown={props.onClose} />
    </ModalWrapper>
  );
};

export default Modal;
