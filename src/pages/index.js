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
  const stakeholders_content = data.allStakeholdersDataJson.edges;

  return (
    <Layout>
      <Splash
        sectionSubtitle="Monitor, manage, monetize"
        sectionTitle="Software for Smart, Renewable Asset Management"
        sectionText="Experience our comprehensive renewables management platform, tailored for the evolving landscape of distributed energy resources and a sustainable future. Our platform is designed to offer system-wide visibility, enhanced administrative capabilities, and performance analytics."
        showBtn
        type="home"
      />
      <PortfolioGrid portfolio={stakeholders_content} />

      <ServicesGrid content={services_content} />

      <Cta />
    </Layout>
  );
};

export const query = graphql`
  query {
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
    allStakeholdersDataJson {
      edges {
        node {
          title
          text
          gradientStart
          gradientEnd
          img {
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: BLURRED, quality: 100)
            }
          }
        }
      }
    }
  }
`;

export default Index;
