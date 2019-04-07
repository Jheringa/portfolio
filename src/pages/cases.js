import React, { useState, useEffect } from "react"
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
      <div className="cases-wrapper">
        <Carousel
          speed="200"
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          renderBottomCenterControls={({ currentSlide, slideCount }) => <span className="slide-count">0{currentSlide + 1}/0{slideCount}</span>}
        >
          <Link to="paard" className="cases-slide">
            <div>
              <div className="cases-background"></div>
              <Img className="cases-image" fluid={data.casePaard.childImageSharp.fluid} />
            </div>
            <div>
              <h3 className="cases-title">Paard case</h3>
              <span className="skill-set">Type: School | Visual design | Concept | Protyping</span>
              <span className="skill-set">Programs: Sketch | Photoshop | Principle</span>
              <p className="product-description">
                Fabrique gave us the assignment to create an interactive product for Paard. It was a group project, my roll in all of this was to design the website…
            </p>
            </div>
          </Link>
          <Link to="food" className="cases-slide">
            <div>
              <div className="cases-background"></div>
              <Img className="cases-image" fluid={data.caseFood.childImageSharp.fluid} />
            </div>
            <div>
              <h3 className="cases-title">Food app</h3>
              <span className="skill-set">Type: Own project | UI | Motion design</span>
              <span className="skill-set">Programs: Sketch | Flinto</span>
              <p className="product-description">
                This app is for indecisive people. It started as a joke, my friends always asked me what should I eat tonight?
            </p>
            </div>
          </Link>
          <Link to="werkstad" className="cases-slide">
            <div>
              <div className="cases-background"></div>
              <Img className="cases-image" fluid={data.woonstadCase.childImageSharp.fluid} />
            </div>
            <div>
              <h3 className="cases-title">Woonstad Rotterdam</h3>
              <span className="skill-set">Type: School | UX/UI | Concepting | Prototyping</span>
              <span className="skill-set">Programs: Sketch | Flinto</span>
              <p className="product-description">
                The website was for my formal employer. Designing and building a new website for his restaurant.
            </p>
            </div>
          </Link>
        </Carousel>
      </div>
    </Layout>
  )
}

export default CasesPage
