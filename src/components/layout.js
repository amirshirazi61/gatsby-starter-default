/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Container from "react-bootstrap/Container"
import "./layout.css"
import Jumbotron from "react-bootstrap/Jumbotron"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      headerImage: file(relativePath: { eq: "ashirazi.png" }) {
        childImageSharp {
          fluid(maxWidth: 1184, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imgStyle = {
    borderRadius: "10%",
  }
  const iconStyle = {
    background: "#e9ecef",
    color: "black",
    ":hover": {
      color: "inherit",
    },
  }
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link to="/">Amir Shirazi</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">
                About
              </Link>
              <Link className="nav-link" to="/exp">
                Experience
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col md={4}>
            <Jumbotron>
              <Img
                fluid={data.headerImage.childImageSharp.fluid}
                style={imgStyle}
                alt={"Amir Shirazi"}
              />
              <div className="text-center">
                <h1 className="mb-0">
                  <small>Amir Shirazi</small>
                </h1>
                <h3 className="mb-1">
                  <small>Senior Software Engineer</small>
                </h3>
                <a href="mailto: amirshirazi61@yahoo.com">
                  amirshirazi61@yahoo.com
                </a>
                <div>
                  <a href="https://github.com/amirshirazi61" target="blank">
                    <FontAwesomeIcon
                      size="lg"
                      icon={faGithub}
                      mask={faCircle}
                      style={iconStyle}
                      transform="shrink-5"
                      className="mr-1"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amir-shirazi-9131b260/"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      size="lg"
                      icon={faLinkedin}
                      mask={faCircle}
                      style={iconStyle}
                      transform="shrink-5"
                    />
                  </a>
                </div>
                <div className="fa-4x">
                  <i
                    className="fas fa-headphones"
                    data-fa-transform="shrink-6"
                    data-fa-mask="fas fa-square"
                    style={iconStyle}
                  ></i>
                  <i
                    className="fas fa-mask"
                    data-fa-transform="shrink-3 up-1"
                    data-fa-mask="fas fa-circle"
                    style={iconStyle}
                  ></i>
                </div>
              </div>
            </Jumbotron>
          </Col>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
