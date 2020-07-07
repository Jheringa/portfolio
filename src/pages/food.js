import React, { useState } from "react"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app
import "../components/case/styles/case.css"

const PaardPage = () => {
  const data = useStaticQuery(graphql`
    query food {
      headervisual: file(relativePath: { eq: "Food-case-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food1: file(relativePath: { eq: "food-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food2: file(relativePath: { eq: "food-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food3: file(relativePath: { eq: "food-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food4: file(relativePath: { eq: "food-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food5: file(relativePath: { eq: "food-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food6: file(relativePath: { eq: "food-6.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food7: file(relativePath: { eq: "food-7.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food8: file(relativePath: { eq: "food-8.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const images = [
    data.food1.childImageSharp.fluid.src,
    data.food2.childImageSharp.fluid.src,
    data.food3.childImageSharp.fluid.src,
    data.food4.childImageSharp.fluid.src,
    data.food5.childImageSharp.fluid.src,
    data.food6.childImageSharp.fluid.src,
    data.food7.childImageSharp.fluid.src,
    data.food8.childImageSharp.fluid.src,
  ]

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <>
      <header>
        <div className="header-visual">
          <div className="nav-link-conainer">
            <span className="nav-link" to="/">
              Back
            </span>
            <Link className="nav-link" to="/">
              Back
            </Link>
          </div>
          <Img fluid={data.headervisual.childImageSharp.fluid} />
        </div>
        {/* <h1 className="header-text">Food app</h1>
        <span className="skill-set">Sketch | Photoshop | Principle</span>
        <span className="subtitle">
        It started as a joke. My friends always ask me{" "}
        <span className="highlighted">what should I eat tonight?</span>
      </span> */}
      </header>
      <Layout>
        <section className="case-section" data>
          <h2 className="xl-title with-overlapping-text" data-count="1">
            Research
          </h2>
          <p>
            In the beginning I started with research about food psychology.
            Which colors are used in food advertisements and why? What are the
            rules in the kitchen about color use and would it be possible to
            play with colors whilst cooking a meal?
          </p>
          <p>
            As I'm a person that doesn't use recipes, there were a couple of
            recipe questions that I wanted answered before I started designing.
            What is important information needs to be in a recipe? Furthermore
            it was also important to know what the most common dislikes /
            allergies are the dangerous effects on people?
          </p>
        </section>
        <section className="case-section">
          <h2 className="xl-title with-overlapping-text" data-count="2">
            Concept
          </h2>
          <div className="split-wrapper">
            <div className="split-wrapper__column">
              <p>
                This app is for indecisive people. The struggle of not knowing
                what to eat at night is a common problem for students / people
                in general. My personal quest was to find a fun and easy way to
                solve this. I had to take in consideration that most people are
                not top chefs and that I needed to keep the recipes simple.
                Another important note would be allergies, diets, and dislikes.
                To keep people motivated and to let them try out new recipes I
                added a gamification element, to unlock next level recipes.
              </p>
            </div>
            <div className="split-wrapper__column case-highlight-block">
              <h3 className="h3__case">Final concept</h3>
              <p>
                This app will help you decide on what to eat. By going trough a
                couple simple questions it generates a suited recipe. After
                discovering all the recipes you unlock a special recipe for each
                of the base categories (pasta, rice, etc). These special recipes
                will challenge you to try new things. They may be a little
                harder to make but will be a good way to impress your friends.
              </p>
            </div>
          </div>

          <span className="subtitle">
            OMG, can you actually make this{" "}
            <span className="highlighted">I need this!!</span>
          </span>
        </section>
        <section className="case-design case-section">
          <h2 className="xl-title with-overlapping-text" data-count="3">
            Design
          </h2>
          <p>
            In the design proces, I took in encounter that certain colors are
            universally used to identify types of food, for example your cutting
            board color is telling you for what you should use it! Meat is red,
            bread is yellow and allergies is purple. Before making the final
            design and prototyping, I tested the design on my classmates and
            friend if they missed certain functions.
          </p>
          <div className="split-wrapper">
            <div className="split-wrapper__column">
              <h3 className="h3__case">Screens</h3>

              <div
                onClick={() => setLightboxIsOpen(true)}
                className="thumpnails"
              >
                <Img fluid={data.food1.childImageSharp.fluid} />
                <Img fluid={data.food2.childImageSharp.fluid} />
                <Img fluid={data.food6.childImageSharp.fluid} />
              </div>
              {lightboxIsOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={
                    images[(photoIndex + images.length - 1) % images.length]
                  }
                  onCloseRequest={() => setLightboxIsOpen(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + images.length - 1) % images.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                  }
                />
              )}
            </div>
          </div>
        </section>
        <section className="case-section">
          <h2 className="xl-title with-overlapping-text" data-count="4">
            Prototype
          </h2>
          <br />
          <div className="embed-container">
            <iframe
              src="https://www.youtube.com/embed/M2lPz-DiYCQ"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default PaardPage
