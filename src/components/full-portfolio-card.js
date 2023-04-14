import { Link } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import {
  Title,
  responsive,
  theme,
  Pill,
  Row,
  Text,
  SectionSubtitle,
} from "theme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 0;
  background: ${({ backgroundColor }) => backgroundColor || theme.offBlack};
  ${responsive.md`
    display: flex;
    flex-direction: ${({ flexDirectionRow }) =>
      flexDirectionRow ? "row" : "row-reverse"};
    justify-content: space-between;
    align-items: center;
    padding: 120px 0;
  `}
`;

const Container = styled.div`
  height: 280px;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 12px;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  background-image: ${({ gradientStart, gradientEnd }) =>
    `linear-gradient(to top, #${gradientStart}, #${gradientEnd})`};
  ${responsive.md`
    width: 40%;
    margin-bottom: 0px;
    height: 320px;
  `}
  ${responsive.lg`
    height: 540px;
    max-width: 680px;
  `}
`;

const Div = styled.div`
  margin: 0 auto;
  width: 90%;
  ${responsive.md`
    width: 40%;
  `}
`;

const WorkDiv = styled.div`
  display: block;
`;

const StyledImage = styled(GatsbyImage)`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  width: 300px;
  ${responsive.lg`
    width: 500px;
  `}
  ${({ type }) =>
    type === "Cluey" &&
    css`
      top: 50%;
      transform: translateY(-30%);
      width: 200px;
      ${responsive.lg`
        width: 375px;
      `}
    `}
  ${({ type }) =>
    type === "UrbanCrop" &&
    css`
      top: 50%;
      transform: translateY(-30%);
      width: 200px;
      ${responsive.lg`
        width: 375px;
      `}
    `}
  ${({ type }) =>
    type === "AchieveCE" &&
    css`
      width: 250px;
    `}
`;

export const FullPortfolioCard = ({
  title,
  gradientStart,
  gradientEnd,
  slug,
  requirements,
  description,
  productType,
  backgroundColor,
  alternatingIndex,
  img,
}) => {
  return (
    <Link to={`/work/${slug}`}>
      <Wrapper
        backgroundColor={backgroundColor}
        flexDirectionRow={alternatingIndex === 0}
      >
        <Container gradientStart={gradientStart} gradientEnd={gradientEnd}>
          <StyledImage type={title} image={getImage(img)} />
        </Container>
        <Div>
          <SectionSubtitle>{productType}</SectionSubtitle>
          <Title bold margin="4px 0">
            {title}
          </Title>
          <WorkDiv>
            <Text small margin="0">
              {description}
            </Text>
            <Row gap margin="12px 0 0 0">
              {requirements &&
                requirements.length > 0 &&
                requirements.map((key, index) => (
                  <Pill key={index}>
                    <p>{key}</p>
                  </Pill>
                ))}
            </Row>
          </WorkDiv>
        </Div>
      </Wrapper>
    </Link>
  );
};
