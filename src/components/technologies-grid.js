import React from "react";
import styled from "styled-components";
import { SectionSubtitle, Column, Title, responsive, theme } from "theme";
import { brands_data } from "../constants/brands_data";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0;
  background: ${theme.secondaryGrey};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 24px;
  ${responsive.md`
    width: 85%;
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 140px;
  width: 90%;
  margin: 0 auto;
  grid-gap: 24px;
  ${responsive.sm`
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 160px;
  `}
  ${responsive.md`
    width: 85%;
  `}
`;

const BrandWrapper = styled.div`
border-radius: 16px;
box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
background-color: #2a2b2d;
display: flex;
align-items: center;
justify-content;
`;

const BrandItem = () => <BrandWrapper />;

export const TechnologiesGrid = () => {
  return (
    <Wrapper>
      <Container>
        <SectionSubtitle>Technologies</SectionSubtitle>
        <Title>My tech stack that I rely on</Title>
      </Container>
      <Grid>
        {brands_data.map((key, index) => (
          <BrandItem key={index} />
        ))}
      </Grid>
    </Wrapper>
  );
};
