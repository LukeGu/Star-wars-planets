import React from "react";
import styled from "styled-components";

type PageNavProps = {
  isActive?: boolean;
};

const Wrapper = styled.div`
  display: inline-block;
`;

const PageNav = styled.a<PageNavProps>`
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: ${(props) => (props.isActive ? "1px solid #4CAF50" : "1px solid #ddd")};
  background-color: ${(props) => (props.isActive ? "#4CAF50" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:hover {
    background-color: #ddd;
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
      {props.currentNum !== 1 && <PageNav href="#">&laquo;</PageNav>}
      {navs}
      {props.currentNum !== props.totalNum && <PageNav href="#">&raquo;</PageNav>}
    </Wrapper>
  );
};

export default Pagination;
