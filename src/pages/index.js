import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Amir Shirazi Personal Web Site" />
    {data.aboutMe.nodes.map((am, i) => (
      <React.Fragment key={i}>
        <h1>{am.title}</h1>
        <p>{am.desc}</p>
      </React.Fragment>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    aboutMe: allAbout(filter: { collection: { eq: "about" } }) {
      nodes {
        title
        desc
      }
    }
  }
`
