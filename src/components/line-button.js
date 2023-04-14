import React from "react";
import styled from "styled-components";
import { SectionSubtitle } from "theme";

const Wrapper = styled.div`
  width: 100%;
  max-width: 300px;
  border: 1px solid;
  border-image-source: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  border-image-slice: 1;
  height: 60px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction ${({ orientation }) =>
    orientation === "left" && "row-reverse"};
  ${({ orientation, offSet }) =>
    orientation === "right"
      ? `margin-left: -${offSet}px`
      : `margin-right: -${offSet}px`};
  &:hover {
    .box {
      background: #fff;
    }
  }
`;

const Box = styled.div`
  width: 60px;
  height: 100%;
  transition: 250ms;
  background: transparent;
  ${({ orientation, offSet }) =>
    orientation === "right"
      ? `margin-left: ${offSet}px; margin-right: 16px;`
      : `margin-right: ${offSet}px; margin-left: 16px;`}
`;

export const LineButton = ({
  action,
  text,
  orientation = "right",
  offSet = 0,
}) => {
  return (
    <Wrapper offSet={offSet} onClick={action} orientation={orientation}>
      <Box className="box" offSet={offSet} orientation={orientation} />
      <SectionSubtitle>{text}</SectionSubtitle>
    </Wrapper>
  );
};
