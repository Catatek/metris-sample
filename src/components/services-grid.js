import React, { useState } from "react";
import styled from "styled-components";
import {
  SectionSubtitle,
  Column,
  Title,
  responsive,
  theme,
  Text,
  Subtitle,
} from "theme";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 24px;
  ${responsive.md`
    width: 85%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0;
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 90px;
  margin: 0 auto;
  grid-gap: 24px;
  width: 100%;
  ${responsive.sm`
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 160px;
  `}
  ${responsive.md`
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 105px;
    margin: 0;
    width: auto;
  `}
`;

const ServicesWrapper = styled.div`
    border-radius: 16px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
    background-color: #1c1d1f;
    display: flex;
    align-items: center;
    justify-content;
    box-sizing: border-box;
    padding: 0 24px;
    border: solid 2px transparent;
    transition: 250ms;
    cursor: pointer;
    ${({ activeService }) =>
      activeService &&
      `
        border-color: ${theme.purple};
    `}
    h2 {
        max-width: 170px;
    }
    ${responsive.md`
      h2 {
        max-width: 100%;
      }
  `}
`;

const ServiceTileWrapper = styled(Column)`
  box-sizing: border-box;
  border-radius: 12px;
  ${responsive.md`
    width: 40%;
    max-width: 500px;
  `}
`;

const StyledColumn = styled(Column)`
  ${responsive.md`
      width: 50%;
  `}
`;

const StyledImage = styled(GatsbyImage)`
  margin-bottom: 12px;
`;

const ServiceTile = ({ label, description, src }) => (
  <ServiceTileWrapper>
    <StyledImage image={src} />
    <Subtitle bold>{label}</Subtitle>
    <Text>{description}</Text>
  </ServiceTileWrapper>
);

const ServicesItem = ({ label, handleClick, activeService }) => (
  <ServicesWrapper onClick={handleClick} activeService={activeService}>
    <Subtitle>{label}</Subtitle>
  </ServicesWrapper>
);

export const ServicesGrid = ({ content }) => {
  const [activeService, setActiveService] = useState(0);
  const activeServiceObj = content[activeService];
  const { label, description, img } = activeServiceObj.node;

  return (
    <Wrapper>
      <Container>
        <StyledColumn>
          <SectionSubtitle>Features</SectionSubtitle>
          <Title>The Metris Grid Management Platform</Title>
          <Text>
            Leveraging our cutting-edge software platform, our mission is to
            equip utilities and energy providers with the tools to tackle
            current challenges and establish the groundwork for a sustainable,
            energy-efficient future.
          </Text>

          <Grid>
            {content &&
              content.map((key, index) => (
                <ServicesItem
                  key={index}
                  label={key.node.label}
                  activeService={activeService === index}
                  handleClick={() => setActiveService(index)}
                />
              ))}
          </Grid>
        </StyledColumn>

        {activeServiceObj && (
          <ServiceTile
            label={label}
            description={description}
            src={getImage(img)}
          />
        )}
      </Container>
    </Wrapper>
  );
};
