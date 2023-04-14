import React from "react";
import styled from "styled-components";
import { responsive, NavLink, fonts } from "theme";
import { Logo } from "./index";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #2d2d2e;
  padding: 40px 0;
  ${responsive.lg`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

const TrademarkText = styled.p`
  font-family: ${fonts.sofiaPro};
  font-size: 14px;
  font-weight: bold;
  color: #737373;
  margin-top: 16px;
  ${responsive.sm`
    font-size: 16px;
  `}
  ${responsive.lg`
    margin: 0;
  `}
`;

const LogoContainer = styled.div`
  width: 200px;
  margin-bottom: 24px;
  ${responsive.lg`
    margin-bottom: 0;
  `}
`;

export const Footer = () => (
  <Wrapper>
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {/* <NavLink footerNav>Work</NavLink> */}
      {/* <NavLink footerNav>Writing</NavLink>
      <NavLink footerNav>Research</NavLink>
      <NavLink footerNav>About</NavLink> */}

      <TrademarkText>© Metris Energy 2023</TrademarkText>
    </Container>
  </Wrapper>
);
