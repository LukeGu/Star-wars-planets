import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity linear 0.15s;
  z-index: 2000;
`;

export const ModalBody = styled.div`
  z-index: 1050;
  width: 100%;
  max-width: 40rem;
  background-color: #fefefe;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.div`
  height: 3rem;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c7c7c7;
`;

export const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 0 0;
`;

export const ModalContent = styled.div`
  padding: 1.5rem;
`;

export const Backdrop = styled.div`
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  z-index: 1040;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 0;
`;
