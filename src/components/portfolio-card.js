import React from "react";
import styled, { css } from "styled-components";
import { Title, SectionSubtitle, responsive } from "theme";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  height: 280px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  background-image: ${({ gradientStart, gradientEnd }) =>
    `linear-gradient(to top, #${gradientStart}, #${gradientEnd})`};
`;

const Div = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const StyledImage = styled(GatsbyImage)`
  position: absolute;
  right: -50px;
  top: 20%;
  width: 400px;
`;

export const PortfolioCard = ({
  title,
  gradientStart,
  gradientEnd,
  type,
  img,
}) => {
  return (
    <Wrapper>
      <Div>
        <Container gradientStart={gradientStart} gradientEnd={gradientEnd}>
          <StyledImage type={title} image={getImage(img)} />
        </Container>
        <SectionSubtitle>{type}</SectionSubtitle>
        <Title bold margin="4px 0">
          {title}
        </Title>
      </Div>
    </Wrapper>
  );
};
