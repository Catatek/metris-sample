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
  height: 100%;
  width: 100%;
  padding: 100px 0;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${responsive.sm`
    width: 65%;
  `}
  ${responsive.md`
    width: ${({ type }) => (type === "work" ? "65%" : "85%")};
    flex-direction: row;
    justify-content: space-between;
    min-height: 500px;
  `}
`;

const StyledColumn = styled(Column)`
  margin-bottom: 40px;
  ${responsive.md`
    width: 45%;
    max-width: 500px;
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

        <StaticImage
          src="../images/meter_splash.png"
          alt="William Whatley Logo"
          placeholder="blurred"
          width={800}
          style={{ opacity: 0.9 }}
        />
      </Container>
    </Wrapper>
  );
};
