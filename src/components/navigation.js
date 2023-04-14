import React from "react";
import styled from "styled-components";
import { Row, NavLink, Button, responsive } from "theme";
import { Burger, Logo } from "./index";
import { openPopupWidget } from "react-calendly";
import { Link } from "gatsby";

const Wrapper = styled.div`
  height: 85px;
  width: 100%;
  ${({ scrollActive }) =>
    scrollActive &&
    `
    top: 0;
    position: fixed;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    background-color: rgba(6, 6, 6, 0.4);
  `}
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${responsive.md`
    width: 85%;
  `}
`;

const StyledRow = styled(Row)`
  display: none;
  align-items: center;
  ${responsive.sm`
    display: flex;
  `}
`;

export const Navigation = () => (
  <Wrapper>
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <StyledRow>
        <Button
          onClick={() =>
            openPopupWidget({
              url: "https://calendly.com/williamwhatley/30min",
            })
          }
        >
          Schedule Call
        </Button>
      </StyledRow>
      {/* <Burger /> */}
    </Container>
  </Wrapper>
);
