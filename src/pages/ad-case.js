import React, { useState } from "react"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This
import "../components/case/styles/case.css"

// DEZE NAAM VERANDEREN, moet uniek zijn.
const AdCase = () => {
  const data = useStaticQuery(graphql`
    query adCase {
      headervisual: file(relativePath: { eq: "AD_case_header.png" }) {
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
    // data.AD_case_header.childImageSharp.fluid.src,
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
        {/* <h1 className="header-text">Ad case</h1>
        <span className="skill-set">
          Datum: 2019 | Group project | Tools: Sketch, After effects, Unity
        </span>
        <span className="subtitle">
          This was a school project assigned by AD (newspaper). The goal was to{" "}
          <span className="highlighted">
            'stimulate the target group millennials to read the news more
            often.'.
          </span>{" "}
        </span> */}
      </header>
      <Layout>
        <section className="case-section" data>
          <h2 className="xl-title with-overlapping-text" data-count="1">
            Research
          </h2>
          <p>
            To find out the reason for millennials not being involved with daily
            news we needed to take a look at their habits and needs. We had a
            survey among millennials and found the following insights:
          </p>
          <div className="results">
            <div className="split-wrapper centered">
              <h3 className="h3__case">Values and goals</h3>

              <ul className="result-list">
                <li>
                  - The news is was often depressing, millennials don't read
                  long articles. We cannot make the news more positive but we
                  can do something about the way they consume the news. The
                  target group liked to have short interaction and just hear the
                  important facts. This could be done through instagram stories
                  or snapchat.{" "}
                </li>
                <li>
                  - They mainly involved with reading the news when they're
                  waiting or traveling the public transport.
                </li>
                <li>
                  - When they find a topic that interests them, they go and look
                  it up, outside of the app.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="case-section">
          <h2 className="xl-title with-overlapping-text" data-count="2">
            Concept
          </h2>
          <p>
            In the concept we focus on both the digital app and the physical
            newspaper experience. The concept we created is for all ages and
            does not limit to just the target group.
          </p>

          <div className="split-wrapper">
            <p>
              We wanted to give the user short insights about the news, from a
              different perspective. By doing this we want to stimulate them to
              read the whole article and experience it from a different
              perspective. The user can unlock extra information by scanning a
              photo on one of the posters placed at public transport stations.
              For example, if someone would scan the article of the Rotterdam
              marathon, you will see extra information on the marathon or a
              video with the view from one of the participating runners. The
              information will be in AR so the user can still see the original
              article and does not need to switch between screens. The goals is
              to make this possible within the existing AD app so there is no
              extra account or app needed.
            </p>
          </div>
        </section>
        <section className="case-section">
          <span className="subtitle">
            <span className="highlighted">AD</span> - "why do we not have this
            yet, can we try and do this for the next newspaper?"
          </span>
        </section>
        <section className="case-design case-section">
          <h2 className="xl-title with-overlapping-text" data-count="3">
            Design
          </h2>
          <p>
            For the design it was my task to work on the AR element. For this I
            used Unity, a platform where you can create AR overlays. There were
            different prototypes where we showed different types of content to
            see what kinda insight information the used would like to see. For
            the public transport board we could not make an AR version but we
            tested it with a demo video and scenario.
          </p>
          <div className="split-wrapper">
            <div className="split-wrapper__column">
              <h3 className="h3__case">Screens</h3>
              <div
                onClick={() => setLightboxIsOpen(true)}
                className="thumpnails"
              >
                {/* Voorbeeld */}
                {/* <Img fluid={data.paard1.childImageSharp.fluid} /> */}
              </div>
              {/* {lightboxIsOpen && (
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
            )} */}
            </div>
          </div>
        </section>
        <section className="case-section">
          <h2 className="xl-title with-overlapping-text" data-count="4">
            Prototype
          </h2>
          <div class="embed-container">
            <iframe
              width="100%"
              height="auto"
              src="https://youtube.com/embed/TDFsILQvUYk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </section>
      </Layout>
    </>
  )
}

// DEZE NAAM VERANDEREN, zelfde als boven.
export default AdCase
