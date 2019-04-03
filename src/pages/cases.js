import React from "react"
import { useStaticQuery, Link } from 'gatsby';
import Layout from "../components/layout"
import Img from "gatsby-image"
import '../components/CaseSlider/styles/CaseSlider.css';
import Carousel from 'nuka-carousel';

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
      caseAd: file(relativePath: { eq: "ad.png" }) {
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
      <header>
        <h1>Cases</h1>
      </header>
      <div className="cases-wrapper">
        <Carousel
          speed="200"
          vertical={true}
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          renderBottomCenterControls={() => null}
        >
          <Link to="paard" className="cases-slide">
            <h3 className="cases-title">Paard case</h3>
            <div className="cases-background"></div>
            <Img className="cases-image" fluid={data.casePaard.childImageSharp.fluid} />
          </Link>
          <Link className="cases-slide">
            <h3 className="cases-title">Food case</h3>
            <div className="cases-background"></div>
            <Img className="cases-image" fluid={data.caseFood.childImageSharp.fluid} />
          </Link>
        </Carousel>
      </div>
    </Layout>
  )
}

export default CasesPage
