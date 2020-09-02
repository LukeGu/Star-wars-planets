import React from "react";
import styled from "styled-components";
// assets
import JupiterIcon from "../../assets/loading.gif";

const Wrapper = styled.div`
  position: fixed;
  top: calc(50% - 2rem);
  left: calc(50% - 2rem);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  z-index: 3000;
`;

const Icon = styled.img`
  width: calc(100% + 2px);
  margin-left: -1px;
  margin-top: -1px;
`;

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 1040;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 0;
`;

const Loading = () => (
  <>
    <Wrapper>
      <Icon alt="loading..." src={JupiterIcon} />
    </Wrapper>
    <Backdrop />
  </>
);

export default Loading;
