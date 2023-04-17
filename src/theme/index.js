import styled from "styled-components";
import { Link } from "gatsby";
import { theme, fonts, responsive } from "./utils";
export { theme, fonts, responsive } from "./utils";

// FONTS

export const Title = styled.h1`
  font-family: ${fonts.sofiaPro};
  font-size: 24px;
  font-weight: bold;
  line-height: 1.19;
  color: ${theme.white};
  margin: ${({ margin }) => margin || "8px 0"};
  ${responsive.lg`
    font-size: 36px;
  `}
`;

export const Subtitle = styled.h2`
  font-family: ${fonts.sofiaPro};
  font-size: 20px;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  line-height: 1.22;
  letter-spacing: normal;
  color: ${theme.white};
  margin: ${({ margin }) => margin};
`;

export const SectionSubtitle = styled.h4`
  font-family: ${fonts.sofiaPro};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 2px;
  color: ${theme.purple};
  margin: 0px;
  text-transform: uppercase;
  ${responsive.lg`
    font-size: 14px;
  `}
`;

export const Text = styled.p`
  font-family: ${fonts.sofiaPro};
  font-size: ${({ small }) => (small ? "14px" : "18px")};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  line-height: 1.56;
  color: ${theme.lightGrey};
  margin: ${({ margin }) => margin};
  ${responsive.lg`
    font-size: 18px;
    line-height: 1.43;
  `}
`;

export const NavLink = styled(Link)`
  font-family: ${fonts.sofiaPro};
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  letter-spacing: 3px;
  color: ${({ footerNav }) => (footerNav ? "#737373" : "#ffffff")};
  margin-right: 30px;
  margin-bottom: ${({ footerNav }) => footerNav && "8px"};
  text-transform: uppercase;
  text-decoration: none;
  ${responsive.lg`
    margin-bottom: ${({ footerNav }) => footerNav && "0px"};
  `}
`;

// DIV's

export const Row = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  gap: ${({ gap }) => (gap ? "8px" : "0px")};
  flex-wrap: ${({ gap }) => (gap ? "wrap" : "nowrap")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
`;

// FORM ELEMENTS

export const Button = styled.button`
  width: max-content;
  height: 48px;
  border-radius: 8px;
  padding: 0 16px;
  background-color: ${theme.purple};
  color: ${theme.offBlack};
  outline: none;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  font-family: ${fonts.sofiaPro};
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop && "12px"};
  transition: 250ms;
  &:hover {
    background-color: #88ffe2;
  }
`;

// MISC

export const Pill = styled.div`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  border-radius: 29px;
  border: solid 1px ${theme.lightGrey};
  width: max-content;
  p {
    font-family: ${fonts.sofiaPro};
    font-size: 12px;
    font-weight: 500;
    color: ${theme.lightGrey};
  }
`;
