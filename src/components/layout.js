import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { theme } from "theme";
import { Navigation, Footer } from "./index";
import "normalize.css";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  background: ${theme.offBlack};
`;

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Layout = ({ children }) => (
  <Wrapper>
    <Helmet>
      <title>Metris Energy</title>
      <meta property="og:title" content="Metris Energy" />
      <meta
        property="og:image"
        content="https://i.postimg.cc/zvbKgZhq/metris-logo.png"
      />
      <meta
        property="og:description"
        content="Monitor, Manage, and Monetize with Software for Smart, Renewable Asset Management"
      />
    </Helmet>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer />
  </Wrapper>
);
