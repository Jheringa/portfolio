import React, { useState } from "react"
import { useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import '../components/case/styles/case.css'

const PaardPage = () => {
  const data = useStaticQuery(graphql`
    query food {
      flowchart: file(relativePath: { eq: "flowchart-paard.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headervisual: file(relativePath: { eq: "Food-case-header.png" }) {
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
    data.flowchart.childImageSharp.fluid.src,
  ]

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <Layout>
      <header>
        <div className="header-visual">
          <div className="nav-link-conainer">
            <span className="nav-link" to="/">Back</span>
            <Link className="nav-link" to="/">Back</Link>
          </div>
          <Img fluid={data.headervisual.childImageSharp.fluid} />
        </div>
        <h1 className="header-text">Food app</h1>
        <span className="skill-set">Sketch | Photoshop | Principle</span>
        <span className="subtitle">This app is for indecisive people. It started as a joke. My friends always ask me <span className="highlighted">what should I eat tonight?</span></span>
      </header>
      <section className="case-section" data>
        <h2 className="xl-title with-overlapping-text" data-count="1">Research</h2>
        <p>There was not much of research about the target group for this project but I started with researching food psychology, which colors are used in food advertisements and why? What are the rules in the kitchen about color use and would it be possible to play with colors while cooking a meal?</p>
        <p>There were a couple of questions that I wanted to be answered before I started designing. So I began by looking up recipes online. For me, it was also important to know what are the most common dislikes/ allergies and what would be the effects?</p>
      </section>
      <section className="case-section">
        <h2 className="xl-title with-overlapping-text" data-count="2">Concept</h2>
        <p>The struggle of not knowing what to eat at night is a common problem for students/ people in general. My personal quest was to find a fun and easy way to solve this problem. To work this out I had to take an encounter that people do not always know how to prepare certain meals and kinda keep it simple. An import and note would also be allergies, diets, and dislikes. I also wanted to put an extra achievement option to keep people motivated to use the app.</p>
        <div className="case-highlight-block">
          <h3 className="h3__case">Final concept</h3>
          <p>This app will help you create an easy dinner meal. By going to a couple simple questions it generates a suiting recipe. After discovering all the recipes you unlock a special recipe for each of the categories. The special recipes might be a little harder to make but will taste and look awesome, a good way to impress your friends.</p>
        </div>
        <span className="subtitle">OMG, can you actually make this <span className="highlighted">I need this!!</span></span>
      </section>
      <section className="case-design case-section">
        <h2 className="xl-title with-overlapping-text" data-count="3">Design</h2>
        <p>In the design process, I straight away started thinking about how I wanted to animate the pages. Before prototyping, I  tested the design with my classmates and friend if they missed certain functions.</p>
        <div className="split-wrapper">
          <div className="split-wrapper__column">
            <h3 className="h3__case">Screens</h3>

            <div onClick={() => setLightboxIsOpen(true)} className="thumpnails">
              <Img fluid={data.food1.childImageSharp.fluid} />
              <Img fluid={data.food2.childImageSharp.fluid} />
              <Img fluid={data.food6.childImageSharp.fluid} />
            </div>
            {lightboxIsOpen && <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setLightboxIsOpen(false)}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            />}
          </div>
        </div>
      </section>
      <section className="case-section">
        <h2 className="xl-title with-overlapping-text" data-count="4">Prototype</h2>
        <p>For this case I used Flinto. This was also a new prototype program. Luckily there were tons of tutorials online. The good thing about Flinto was the micro animations and the ability to copy the transitions instead of making the same animation over and over again.</p>
        <div className='embed-container'><iframe src='https://www.youtube.com/embed/M2lPz-DiYCQ' frameborder='0' allowfullscreen></iframe></div>
      </section>
    </Layout>
  )
}

export default PaardPage
