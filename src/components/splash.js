import React from "react";
import styled from "styled-components";
import {
  Column,
  SectionSubtitle,
  Title,
  Text,
  Button,
  responsive,
} from "theme";
import { StaticImage } from "gatsby-plugin-image";
import { openPopupWidget } from "react-calendly";

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 0;
  ${responsive.md`
    padding: 0px 0;
  `}
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  ${responsive.sm`
    width: 65%;
  `}
  ${responsive.md`
    padding-top: 200px;
    width: ${({ type }) => (type === "work" ? "65%" : "85%")};
    min-height: 500px;
  `}
`;

const StyledColumn = styled(Column)`
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${responsive.md`
    width: 50%;
    max-width: 600px;
    margin-bottom: 0;
  `}
`;

const ImageWrapper = styled(Column)`
  ${responsive.md`
    width: 50%;
    max-width: 800px;
    margin-bottom: 0;
  `}
`;

export const Splash = ({
  sectionSubtitle,
  sectionTitle,
  sectionText,
  showBtn,
  type,
}) => {
  return (
    <Wrapper>
      <Container type={type}>
        <StyledColumn>
          <SectionSubtitle>{sectionSubtitle}</SectionSubtitle>
          <Title>{sectionTitle}</Title>
          <Text small>{sectionText}</Text>
          {showBtn && (
            <Button
              marginTop
              onClick={() =>
                openPopupWidget({
                  url: "https://calendly.com/williamwhatley/30min",
                })
              }
            >
              Schedule Call
            </Button>
          )}
        </StyledColumn>
        {/* <ImageWrapper>
          <StaticImage
            src="../images/meter_splash.png"
            alt="Metris Energy Logo"
            placeholder="blurred"
          />
        </ImageWrapper> */}
      </Container>
    </Wrapper>
  );
};
