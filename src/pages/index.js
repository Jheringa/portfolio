import React from "react"
import { useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import "../components/CaseSlider/styles/CaseSlider.css"

const CasesPage = () => {
  const data = useStaticQuery(graphql`
    query CasePreview {
      casePaard: file(relativePath: { eq: "paard-interface.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      caseFood: file(relativePath: { eq: "food.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      caseAd: file(relativePath: { eq: "ad_test.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      caseElderly: file(relativePath: { eq: "elderly_header.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <header className="cases-header">
        <div className="nav-link-conainer">
          <span className="h1 nav-link active" to="/">
            Cases
          </span>
          <Link className="h1 nav-link" to="/">
            Cases
          </Link>
        </div>
        <div className="nav-link-conainer">
          <span className="h1 nav-link" to="about">
            About
          </span>
          <Link className="h1 nav-link" to="about">
            About
          </Link>
        </div>
        <div className="nav-link-conainer">
          <span className="h1 nav-link" to="sandbox">
            Sandbox
          </span>
          <Link className="h1 nav-link" to="sandbox">
            Sandbox
          </Link>
        </div>
      </header>

      <ParallaxProvider>
        <div className="cases-wrapper">
          <Link className="cases" to="elderly-case">
            <div className="cases-visual">
              <span className="h3 cases-title top">Elderly</span>
              <span className="h3 cases-title bottom">Elderly</span>
              <Parallax y={[-10, 10]} tagOuter="figure">
                <Img
                  className="cases-image"
                  fluid={data.caseElderly.childImageSharp.fluid}
                />
              </Parallax>
              <h3 className="cases-title">Elderly</h3>
            </div>
          </Link>

          <Link className="cases" to="food">
            <div className="cases-visual">
              <span className="h3 cases-title top">Food</span>
              <span className="h3 cases-title bottom">Food</span>
              <Parallax y={[-10, 10]} tagOuter="figure">
                <Img
                  className="cases-image"
                  fluid={data.caseFood.childImageSharp.fluid}
                />
              </Parallax>
              <h3 className="cases-title">Food</h3>
            </div>
          </Link>

          <Link className="cases" to="ad-case">
            <div className="cases-visual">
              <span className="h3 cases-title top">ARnews</span>
              <span className="h3 cases-title bottom">ARnews</span>
              <Parallax y={[-10, 10]} tagOuter="figure">
                <Img
                  className="cases-image"
                  fluid={data.caseAd.childImageSharp.fluid}
                />
              </Parallax>
              <h3 className="cases-title">ARnews</h3>
            </div>
          </Link>
          <Link className="cases" to="paard">
            <div className="cases-visual">
              <span className="h3 cases-title top">Paard</span>
              <span className="h3 cases-title bottom">Paard</span>
              <Parallax y={[-10, 10]} tagOuter="figure">
                <Img
                  className="cases-image"
                  fluid={data.casePaard.childImageSharp.fluid}
                />
              </Parallax>
              <h3 className="cases-title">Paard</h3>
            </div>
          </Link>
        </div>
      </ParallaxProvider>
    </Layout>
  )
}

export default CasesPage
