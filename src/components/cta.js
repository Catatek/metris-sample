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
        src="../images/icon-transparent.png"
        alt="William Whatley Icon"
        placeholder="blurred"
        width={60}
        style={{ marginBottom: 48 }}
      />
      <SectionSubtitle>Contact</SectionSubtitle>
      <Title>Let’s build something together</Title>
      <Text>
        If you’re ready to take your project to the next level, contact me
        today. I’m always excited to discover new projects, and connect with
        talented people who have a vision for their business. Drop me a line and
        I’ll get back to you.
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
