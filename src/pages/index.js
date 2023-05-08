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
        sectionSubtitle="Coming Soon"
        sectionTitle="Smart Billing for Renewable Assets"
        sectionText="With our cutting-edge technology, you can track your energy generation, consumption, and sales in real-time, ensuring that you never miss a watt. Simplify your energy billing process and focus on what really matters -- growing your business and scaling renewable energy adoption."
        showBtn
        type="home"
      />
      {/* <PortfolioGrid portfolio={stakeholders_content} />

      <ServicesGrid content={services_content} />

      <Cta /> */}
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
