import styled from "styled-components";

export const FormLabel = styled.label`
  @media screen and (max-width: 35rem) {
    margin-bottom: 1rem;
  }
`;

export const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 1rem;
  @media screen and (max-width: 35rem) {
    flex-direction: column;
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const FormFooter = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  width: 14rem;
  margin-left: auto;
  justify-content: space-between;
  @media screen and (max-width: 35rem) {
    width: 100%;
  }
`;
