import * as React from "react";
import {
  Layout,
  Splash,
  PortfolioGrid,
  ContentGrid,
  ServicesGrid,
  Cta,
} from "components";
import { graphql } from "gatsby";

const transformTeamArr = (arr) => {
  const newArr = [];
  arr.forEach((elem) => {
    newArr.push(elem, {});
  });
  return newArr;
};

const Index = ({ data }) => {
  const services_content = data.allServicesDataJson.edges;
  const team_content = data.allTeamDataJson.edges;
  const transformed_team_content = transformTeamArr(team_content);
  return (
    <Layout>
      <Splash
        sectionSubtitle="Next Gen Utility Platform"
        sectionTitle="Powering the Future: Software for Smart, Renewable Grid Orchestration"
        sectionText="Experience our comprehensive grid management platform, designed to offer system-wide visibility and enhanced control capabilities, tailored for the evolving landscape of distributed energy resources and a sustainable future."
        showBtn
        type="home"
      />
      {/* <ContentGrid
        sectionSubtitle="Partnerships"
        sectionTitle="Brands that we power"
        content={brands_content}
      /> */}

      <ServicesGrid content={services_content} />

      {/* <ContentGrid
        sectionSubtitle="Team"
        sectionTitle="People I work with"
        content={transformed_team_content}
        dark
      /> */}

      <Cta />
    </Layout>
  );
};

export const query = graphql`
  query {
    allTechnologiesDataJson {
      edges {
        node {
          label
          img {
            childImageSharp {
              gatsbyImageData(width: 60, placeholder: BLURRED, quality: 100)
            }
          }
        }
      }
    }
    allBrandsDataJson {
      edges {
        node {
          label
          img {
            childImageSharp {
              gatsbyImageData(width: 100, placeholder: BLURRED)
            }
          }
        }
      }
    }
    allServicesDataJson {
      edges {
        node {
          label
          value
          description
          img {
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: BLURRED, quality: 100)
            }
          }
        }
      }
    }
    allTeamDataJson {
      edges {
        node {
          img {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: BLURRED, quality: 100)
            }
          }
        }
      }
    }
  }
`;

export default Index;
