import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
// Assets
import BGImg from "../../assets/star-wars-backgrounds.jpg";

const MainWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${BGImg});
  background-size: cover;
`;

const PageLayout = (props: { title: string; children: React.ReactNode }) => (
  <MainWrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
    </Helmet>
    {props.children}
  </MainWrapper>
);

export default PageLayout;
