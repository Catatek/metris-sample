import { css } from "styled-components";

export const theme = {
  offBlack: "#060606",
  gold: "#d3a253",
  lightGrey: "#d8d8d8",
  white: "#fff",
  purple: "#6046cf",
  lightPurple: "#b379e0",
  secondaryGrey: "#1c1d1f",
  pink: "#C8436F",
};

export const fonts = {
  sofiaPro: `'proxima-nova', sans-serif`,
};

export const responsive = {
  sm: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: 960px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: 1366px) {
      ${css(...args)};
    }
  `,
};
