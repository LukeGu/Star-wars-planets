import React from "react";
// components
import { ModalWrapper, ModalBody, ModalHeader, ModalContent, ModalTitle, Backdrop } from "./styled";

const Modal = (props: { onClose: () => void; children: React.ReactNode }) => {
  return (
    <ModalWrapper>
      <ModalBody>
        <ModalHeader>
          <ModalTitle>Update Planet&apos;s Info</ModalTitle>
          <button onClick={props.onClose} className="close">
            ×
          </button>
        </ModalHeader>
        <ModalContent>{props.children}</ModalContent>
      </ModalBody>
      <Backdrop onMouseDown={props.onClose} />
    </ModalWrapper>
  );
};

export default Modal;
