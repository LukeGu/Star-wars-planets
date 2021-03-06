import styled from "styled-components";

export const TitleSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid rgba(170, 170, 170, 0.25);
  border-bottom: 2px solid rgba(170, 170, 170, 0.25);
  margin: 1rem 0 1.5rem;
  padding: 0.65rem 0.6rem 0.4rem;
  box-sizing: border-box;
  @media screen and (max-width: 35rem) {
    flex-flow: column;
    align-items: self-start;
    padding-bottom: 1.2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.15rem;
  line-height: 1.35rem;
  color: #ddd;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
`;

export const FormFooter = styled.div`
  height: 1.5rem;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #c7c7c7;
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0.65rem 0.6rem 0.4rem;
`;

export const CleanBtn = styled.button`
  border: none;
  padding: 0.2rem 1rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  background-color: #343434;
  color: #ddd;
  cursor: pointer;
`;
