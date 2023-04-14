import React from "react";
import styled from "styled-components";
import { SectionSubtitle, Column, Title, responsive, Button } from "theme";
import { PortfolioCard } from "./portfolio-card";
import { Link } from "gatsby";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: auto;
  width: 90%;
  margin: 0 auto;
  grid-gap: 24px;
  ${responsive.md`
    width: 85%;
  `}
`;

export const PortfolioGrid = ({ portfolio }) => {
  return (
    <Wrapper>
      <Container>
        <SectionSubtitle>Who We Serve</SectionSubtitle>
        {/* <Title>
          We equip grid operators with the tools they need to orchestrate an
          increasingly complex grid.
        </Title> */}
      </Container>
      <Grid>
        {portfolio &&
          portfolio.map(({ node }, index) => (
            <PortfolioCard
              key={index}
              // slug={node.slug}
              title={node.title}
              // productType={productType}
              gradientStart={node.gradientStart}
              gradientEnd={node.gradientEnd}
              img={node.img}
            />
          ))}
      </Grid>
    </Wrapper>
  );
};
