import React from "react"
import { useStaticQuery, Link } from 'gatsby';
import Layout from "../components/layout"
import Img from "gatsby-image"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import '../components/CaseSlider/styles/CaseSlider.css';

const CasesPage = () => {
  const data = useStaticQuery(graphql`
    query CasePreview {
      casePaard: file(relativePath: { eq: "paard-interface.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      caseFood: file(relativePath: { eq: "food.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      woonstadCase: file(relativePath: { eq: "werkstad-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <header className="cases-header">
        <h1>Cases</h1>
        <div className="nav-link-conainer">
          <span className="nav-link" to="/">Back</span>
          <Link className="nav-link" to="/">Back</Link>
        </div>
      </header>

      <ParallaxProvider>
        <div className="cases-wrapper">
          <Link className="cases" to="food">
            <div className="cases-visual">
              <span className="h3 cases-title top">Paard</span>
              <span className="h3 cases-title bottom">Paard</span>
              <Parallax y={[-10, 10]} tagOuter="figure">
                <Img className="cases-image" fluid={data.casePaard.childImageSharp.fluid} />
              </Parallax>
              <h3 className="cases-title">Paard</h3>
            </div>
          </Link>

          <Link className="cases" to="food">
            <div className="cases-visual">
              <span className="h3 cases-title top">Food</span>
              <span className="h3 cases-title bottom">Food</span>
              <Parallax y={[-10, 10]} tagOuter="figure">
                <Img className="cases-image" fluid={data.caseFood.childImageSharp.fluid} />
              </Parallax>
              <h3 className="cases-title">Food</h3>
            </div>
          </Link>
        </div>
      </ParallaxProvider>
    </Layout>
  )
}

export default CasesPage
