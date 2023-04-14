import React from "react";
import styled from "styled-components";
import { SectionSubtitle, Title, Text, Button } from "theme";
import { openPopupWidget } from "react-calendly";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  text-align: center;
  max-width: 500px;
`;

export const Cta = () => (
  <Wrapper>
    <Container>
      <StaticImage
        src="../images/metris_icon.png"
        alt="Metris Icon"
        placeholder="blurred"
        width={60}
        style={{ marginBottom: 48 }}
      />
      <SectionSubtitle>Contact</SectionSubtitle>
      <Title>Transition community energy</Title>
      <Text>
        The Metris grid management platform functions as the preferred software
        solution for engineering, power supply, and operations groups.
      </Text>
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
    </Container>
  </Wrapper>
);
