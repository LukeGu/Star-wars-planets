import React from "react";
import styled from "styled-components";

type PageNavProps = {
  isActive?: boolean;
};

const Wrapper = styled.div`
  display: inline-block;
  margin: 2rem 0;
`;

const PageNav = styled.a<PageNavProps>`
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: ${(props) => (props.isActive ? "1px solid #3273c5" : "1px solid #ddd")};
  background-color: ${(props) => (props.isActive ? "#3273c5" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "#999")};
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:hover {
    background-color: #dddddd;
    color: #343434;
  }
  @media screen and (max-width: 35rem) {
    padding: 5px 10px;
  }
`;

const Pagination = (props: { totalNum: number; currentNum: number; getPageNumber: (num: number) => void }) => {
  const navs = [];
  for (let i = 1; i <= props.totalNum; i++) {
    navs.push(
      <PageNav href="#" isActive={i === props.currentNum} onClick={() => props.getPageNumber(i)}>
        {i}
      </PageNav>
    );
  }
  return (
    <Wrapper>
      {props.currentNum !== 1 && props.totalNum > 3 && (
        <PageNav href="#" onClick={() => props.getPageNumber(props.currentNum - 1)}>
          &laquo;
        </PageNav>
      )}
      {navs}
      {props.currentNum !== props.totalNum && props.totalNum > 3 && (
        <PageNav href="#" onClick={() => props.getPageNumber(props.currentNum + 1)}>
          &raquo;
        </PageNav>
      )}
    </Wrapper>
  );
};

export default Pagination;
