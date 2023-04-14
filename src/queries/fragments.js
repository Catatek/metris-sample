import { graphql } from "gatsby";

export const portfolioFragment = graphql`
  fragment PortfolioFragment on ContentfulPortfolio {
    title
    gradient
    date
    slug
    requirements
    splash {
      gatsbyImageData(width: 1000, placeholder: BLURRED)
    }
    description {
      description
    }
    productType
    body {
      body
    }
  }
`;
