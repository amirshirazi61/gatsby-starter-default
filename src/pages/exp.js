import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import {} from "react-bootstrap"

const ExpPage = ({ data }) => (
  <Layout>
    <SEO title="Amir Shirazi Personal Web Site" />
    {data.aboutMe.nodes.map((am, i) => (
      <React.Fragment key={i}>
        <blockquote className="blockquote d-flex justify-content-between">
          <h2 className="d-flex">{am.title}</h2>
          <footer className="small blockquote-footer ml-2">
            {am.duration}
          </footer>
        </blockquote>
        {am.desc ? (
          <div>
            <ul>
              {am.desc.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </React.Fragment>
    ))}
  </Layout>
)

export default ExpPage

export const query = graphql`
  {
    aboutMe: allAbout(
      filter: { collection: { eq: "exp" } }
      sort: { order: ASC, fields: order }
    ) {
      nodes {
        title
        desc
        duration
      }
    }
  }
`
