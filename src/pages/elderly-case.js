import React, { useState } from "react"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Lightbox from "react-image-lightbox"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import "react-image-lightbox/style.css" // This
import "../components/case/styles/case.css"

// DEZE NAAM VERANDEREN, moet uniek zijn.
const ElderlyCase = () => {
  const data = useStaticQuery(graphql`
    query ElderlyCase {
      headervisual: file(relativePath: { eq: "header_elderly_test.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      elderly1: file(relativePath: { eq: "Storyboard_elderly.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      elderly2: file(relativePath: { eq: "strand_elderly-case.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      elderly3: file(relativePath: { eq: "elderly_header.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      elderly4: file(relativePath: { eq: "prototype_elderly-case.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const images = [
    // voorbeeld
    data.elderly1.childImageSharp.fluid.src,
    data.elderly2.childImageSharp.fluid.src,
    data.elderly3.childImageSharp.fluid.src,
    data.elderly4.childImageSharp.fluid.src,
  ]

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <>
      <header>
        <div className="header-visual bottom_space">
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
      </header>
      <Layout>
        <ParallaxProvider>
          <section className="case-section" data>
            <h2 className="xl-title with-overlapping-text" data-count="1">
              Research
            </h2>
            <Parallax y={[-15, 10]} tagOuter="figure">
              <p>
                Loneliness has not only impact on our brain but also on our
                physical performance. There is a difference reasons for feeling
                loneliness and the different types of loneliness need other
                types of treatment. We cannot solve loneliness all together but
                we can create a safe place where there is space to connect.
              </p>
              <p>
                With triggering senses it would be possible to recollect long
                forgotten memories. Even when memories do not come back it would
                be possible to still feel the emotions connected to that memory.
              </p>
            </Parallax>
          </section>
          <section className="case-section">
            <h2 className="xl-title with-overlapping-text" data-count="2">
              Concept
            </h2>
            <Parallax y={[-15, 10]} tagOuter="figure">
              <p>
                The concept "zintuigelijk er op uit" is about bringing an
                experience that they cannot experience anymore to the elderly
                homes. With themes such as going to the beach or forest or
                playing musical instruments By triggering the smell, sound and
                the sight senses we want to recall memories and give them a safe
                space to start share stories, have conversations and connect. Of
                course the experience will accompanied with the necessary drinks
                and snacks!
              </p>
            </Parallax>
          </section>

          <section className="case-design case-section">
            <h2 className="xl-title with-overlapping-text" data-count="3">
              Design
            </h2>
            <Parallax y={[-15, 10]} tagOuter="figure">
              <p>
                Because of the current pandemic we were unable to test in an
                elderly home but we got valuable insight from stakeholders (care
                workers and family). My house was also not ideal to create a
                full prototype, as I don't like to have sand all over my room so
                I decided on a small scaled prototype in the end. The prototype
                together with a storyboard, scenario and visualisation of what
                it should look like it gave good overal view of our intentions.
                The next step for the concept would be adding a storytelling
                aspect to make it easier for the introvert elderly to be
                included. I think that a 360 projection of the surroundings
                would be a cool thing to add as well, it would make the whole
                experience feel complete.
              </p>
            </Parallax>
            <div className="split-wrapper">
              <div className="split-wrapper__column">
                <h3 className="h3__case">Screens</h3>
                <div
                  onClick={() => setLightboxIsOpen(true)}
                  className="thumpnails"
                >
                  <Img fluid={data.elderly1.childImageSharp.fluid} />
                  <Img fluid={data.elderly2.childImageSharp.fluid} />
                  <Img fluid={data.elderly3.childImageSharp.fluid} />
                  {/* <Img fluid={data.elderly4.childImageSharp.fluid} /> */}
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
            <Parallax y={[-10, 20]} tagOuter="figure">
              <div className="embed-container">
                <iframe
                  src="https://www.youtube.com/embed/VwYFtL1Rqyw"
                  frameborder="0"
                  allowfullscreen
                />
              </div>
            </Parallax>
          </section>
        </ParallaxProvider>
      </Layout>
    </>
  )
}

// DEZE NAAM VERANDEREN, zelfde als boven.
export default ElderlyCase
