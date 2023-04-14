import React from "react";
import Popup from "reactjs-popup";
import styled, { css } from "styled-components";
import { theme, responsive } from "theme";

const BurgerWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  position: relative;
  z-index: 99999;
  .bar1,
  .bar2,
  .bar3 {
    width: 25px;
    height: 2px;
    background-color: ${theme.white};
    border-radius: 4px;
    margin: 6px 0;
    transition: 0.4s;
  }
  ${responsive.sm`
      display: none;
  `}

  ${(props) =>
    props.open &&
    css`
      .bar1 {
        -webkit-transform: rotate(-45deg) translate(-4px, 4px);
        transform: rotate(-45deg) translate(-4px, 4px);
      }
      .bar2 {
        opacity: 0;
      }
      .bar3 {
        -webkit-transform: rotate(45deg) translate(-6px, -6px);
        transform: rotate(45deg) translate(-6px, -6px);
      }
    `}
`;

const BurgerIcon = ({ open, ...props }) => {
  return (
    <BurgerWrapper open={open} {...props}>
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
    </BurgerWrapper>
  );
};

const BurgerMenu = ({ close }) => {
  return <></>;
};

const contentStyle = {
  background: theme.offBlack,
  width: "100%",
  height: "100%",
  border: "none",
};

export const Burger = () => {
  return (
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={(open) => <BurgerIcon open={open} />}
    >
      {(close) => <BurgerMenu close={close} />}
    </Popup>
  );
};
