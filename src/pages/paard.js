import React, { useState } from "react"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This
import "../components/case/styles/case.css"

// DEZE NAAM VERANDEREN, moet uniek zijn.
const PaardPage = () => {
  const data = useStaticQuery(graphql`
    query paardCase {
      flowchart: file(relativePath: { eq: "flowchart-paard.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headervisual: file(relativePath: { eq: "paard-interface.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      styleguide: file(relativePath: { eq: "styleguide-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paard1: file(relativePath: { eq: "paard-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paard2: file(relativePath: { eq: "paard-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paard3: file(relativePath: { eq: "paard-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paard4: file(relativePath: { eq: "paard-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const images = [
    data.paard1.childImageSharp.fluid.src,
    data.paard2.childImageSharp.fluid.src,
    data.paard3.childImageSharp.fluid.src,
    data.paard4.childImageSharp.fluid.src,
    data.styleguide.childImageSharp.fluid.src,
    data.flowchart.childImageSharp.fluid.src,
  ]

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <Layout>
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
        <h1 className="header-text">Paard</h1>
        <span className="skill-set">Sketch | Photoshop | Principle</span>
        <span className="subtitle">
          We got the assignment by Fabrique | Paard Den Haag. The question was:{" "}
          <span className="highlighted">
            'How can we get people to return to Paard Den Haag'.
          </span>{" "}
          We worked in a team of 4 people, our target group was the age 23 to
          28.
        </span>
      </header>
      <section className="case-section" data>
        <h2 className="xl-title with-overlapping-text" data-count="1">
          Research
        </h2>
        <p>
          The start phase was research about the target group what were there
          main reasons that they would go out and where they went.
        </p>
        <div className="results">
          <div className="split-wrapper centered">
            <div className="split-wrapper__column">
              <h3 className="h3__case">Values and goals</h3>
            </div>
            <div className="split-wrapper__column">
              <strong className="result-list-title">Paard</strong>
              <ul className="result-list">
                <li>- Happiness</li>
                <li>- Proud</li>
                <li>- Surprises</li>
                <li>- intimate</li>
              </ul>
            </div>
            <div className="split-wrapper__column">
              <strong className="result-list-title">Target group</strong>
              <ul className="result-list">
                <li>- Discover new artists</li>
                <li>- Meet new people</li>
                <li>- Be with friends</li>
                <li>- Able to make choices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="case-section">
        <h2 className="xl-title with-overlapping-text" data-count="2">
          Concept
        </h2>
        <p>
          We had a hard time coming up with a concept. This was because we found
          out that the problem didn't lie in that people didn't want to come
          back but the fact that they simply didn't know about the artist that
          was playing in Paard. The marketing side of Paard was outdated and
          hard to find.
        </p>
        <div className="split-wrapper">
          <h3 className="h3__case">Design criteria</h3>
          <div className="split-wrapper__column">
            <strong>Socialize</strong>
            <p>
              It is very important for our target group to meet up with their
              friends. Therefore we want social media to be a part of our
              concept. A way to invite your friends or meet new people
            </p>
          </div>
          <div className="split-wrapper__column">
            <strong>Experience</strong>
            <p>
              We want the user to have an unforgettable night at Paard. Trough
              discovering new music and socializing with their inner circle.
            </p>
          </div>
          <div className="split-wrapper__column">
            <strong>Discover</strong>
            <p>
              Our target group is in for an adventure. We provide the option of
              exploring new artist (in the genre of your choosing).
            </p>
          </div>
        </div>

        <div className="split-wrapper">
          <div className="split-wrapper__column">
            <p>
              To go around this problem we came with the idea to create a
              concept party. This party would be called "Surprise Paard". In
              this concept, you pick your genre, pick a date that you're
              available and invite your friends and will be surprised with a
              party in that theme. Paard also wanted to be personal with their
              clients, this is why when you bought a ticket you will receive a
              personalized Paard card a couple days later on your doorstep. This
              card is not only your ticket, for people that can't wait you can
              also scan the card and it will reveal the artist that will play
              that night!
            </p>
          </div>
          <div className="split-wrapper__column case-highlight-block">
            <h3 className="h3__case">Final concept</h3>
            <p>
              We organize a well-arranged party. It’s up to you to invite your
              friends (or not) choose a genre and pick a date. We will surprise
              you with an artist your chosen genre. In that way, you can
              discover new artists and expand your Spotify list. As a cherry on
              top, we will send you your special invite card (also your entrance
              ticket) at home!
            </p>
          </div>
        </div>
      </section>
      <section className="case-section">
        <span className="subtitle">
          With a <span className="highlighted">personal touch</span>, we want to
          keep the people close. Let them{" "}
          <span className="highlighted">discover</span> new artists making sure
          they are having a <span className="highlighted">good time</span> with
          their friends.
        </span>
      </section>
      <section className="case-design case-section">
        <h2 className="xl-title with-overlapping-text" data-count="3">
          Design
        </h2>
        <p>
          My task in this process was to design the one-pager and prototype. To
          do this It was necessary to create a good flow. To keep everything in
          the branding of Paard a style guide was also needed.
        </p>
        <div className="split-wrapper">
          <div className="split-wrapper__column">
            <h3 className="h3__case">Screens</h3>
            <div onClick={() => setLightboxIsOpen(true)} className="thumpnails">
              <Img fluid={data.paard1.childImageSharp.fluid} />
              <Img fluid={data.paard2.childImageSharp.fluid} />
              <Img fluid={data.paard3.childImageSharp.fluid} />
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
        <p>
          This was the first time to work with principle. I chose this program
          because I wanted to try something else other than adobe XD or
          Invision. It was a fine program to work with but I missed the ability
          to easily click through different paths without having to draw it out.
        </p>
        <div class="embed-container">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/Jl23blit5kk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </section>
    </Layout>
  )
}

// DEZE NAAM VERANDEREN, zelfde als boven.
export default PaardPage
