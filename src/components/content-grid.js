import React from "react";
import styled, { css } from "styled-components";
import { SectionSubtitle, Title, responsive, theme, Text } from "theme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0;
  background: ${({ dark }) =>
    dark ? `${theme.offGrey}` : `${theme.secondaryGrey}`};
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
  position: relative;
  ${({ avatarCard }) =>
    avatarCard &&
    css`
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0px;
      margin-top: 12px;
    `}
  ${responsive.sm`
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 160px;
  ${({ avatarCard }) =>
    avatarCard &&
    css`
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: auto;
    `}
  `}
  ${responsive.md`
    width: 85%;
    ${({ avatarCard }) =>
      avatarCard &&
      css`
        width: 75%;
      `}
  `}
`;

const CardWrapper = styled.div`
  border-radius: 16px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ transparent }) => !transparent && "#2a2b2d"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const StyledImage = styled(GatsbyImage)`
  ${({ technologiesCard }) =>
    technologiesCard &&
    css`
      margin-bottom: 12px;
      width: 32px;
      height: 32px;
    `}
  ${({ avatarCard, dimensions }) =>
    avatarCard &&
    css`
      width: ${dimensions}px;
      height: ${dimensions}px;
      border-radius: 100%;
    `}
`;

const BluredDiv = styled.div`
  width: 300px;
  height: 300px;
  opacity: 0.3;
  -webkit-filter: blur(100px);
  filter: blur(100px);
  background-image: linear-gradient(to top, #6046cf, rgba(200, 67, 111, 0.5));
  position: absolute;
`;

const dimensionsArr = [110, 56, 80, 92];

const CardItem = ({ src, label, avatarCard, dimensions, technologiesCard }) => (
  <CardWrapper transparent={avatarCard}>
    {src && (
      <StyledImage
        image={src}
        technologiesCard={technologiesCard}
        avatarCard={avatarCard}
        dimensions={dimensions}
      />
    )}
    {technologiesCard && (
      <Text bold margin="0">
        {label}
      </Text>
    )}
  </CardWrapper>
);

export const ContentGrid = ({
  sectionTitle,
  sectionSubtitle,
  content,
  dark = false,
}) => {
  const avatarCard = sectionSubtitle === "Team";
  const brandsCard = sectionSubtitle === "Partnerships";
  const technologiesCard = sectionSubtitle === "Technologies";
  return (
    <Wrapper dark={dark}>
      <Container>
        <SectionSubtitle>{sectionSubtitle}</SectionSubtitle>
        <Title>{sectionTitle}</Title>
      </Container>
      <Grid avatarCard={avatarCard}>
        {!avatarCard && <BluredDiv />}
        {content &&
          content.map((key, index) => {
            const dimensions =
              dimensionsArr[Math.floor(Math.random() * dimensionsArr.length)];
            return (
              <CardItem
                key={index}
                label={key.node ? key.node.label : null}
                src={key.node ? getImage(key.node.img) : null}
                avatarCard={avatarCard}
                brandsCard={brandsCard}
                technologiesCard={technologiesCard}
                dimensions={dimensions}
              />
            );
          })}
      </Grid>
    </Wrapper>
  );
};
