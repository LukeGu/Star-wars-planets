import React from "react";
// components
import { SquareButton as Button } from "../../components/index";
import { ModalWrapper, ModalBody, ModalHeader, ModalContent, ModalFooter, ModalTitle, Backdrop } from "./styled";

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
        <ModalFooter>
          <Button onClick={props.onClose}>Submit</Button>
          <Button onClick={props.onClose}>Cancel</Button>
        </ModalFooter>
      </ModalBody>
      <Backdrop onMouseDown={props.onClose} />
    </ModalWrapper>
  );
};

export default Modal;
