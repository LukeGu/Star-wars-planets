import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
// components
import { Header, LogoHeader, Footer } from "../../components/index";
// Assets
import BGImg from "../../assets/star-wars-backgrounds.jpg";

const MainWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BGImg});
  background-size: cover;
`;

const Container = styled.div`
  max-width: 70rem;
  width: 80%;
  margin: 0 auto;
`;

const PageLayout = (props: { title: string; isHome?: boolean; children: React.ReactNode }) => (
  <MainWrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
    </Helmet>
    {props.isHome ? <LogoHeader /> : <Header />}
    <Container>{props.children}</Container>
    <Footer />
  </MainWrapper>
);

export default PageLayout;
