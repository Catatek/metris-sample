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
        <SectionSubtitle>My Projects</SectionSubtitle>
        <Title>Things I love working on</Title>
      </Container>
      <Grid>
        {portfolio &&
          portfolio.map(({ node }, index) => (
            <PortfolioCard
              key={index}
              slug={node.slug}
              title={node.title}
              productType={node.productType}
              gradientStart={node.gradient[0]}
              gradientEnd={node.gradient[1]}
              img={node.splash}
            />
          ))}
      </Grid>
      <Column alignItems="center" margin="24px 0 0 0">
        <Link to="/work">
          <Button>See More Work</Button>
        </Link>
      </Column>
    </Wrapper>
  );
};
