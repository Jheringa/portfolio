import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactList from "../components/ContactList"

import styles from "../components/AboutHeader/styles/About.module.css"
import "../components/Home/styles/home.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query home {
      portrait: file(relativePath: { eq: "about-me-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <header className={styles.header}>
        <h1 className={styles.title}>Hello!</h1>
        <div className={styles.image}>
          <Img fluid={data.portrait.childImageSharp.fluid} />
        </div>
        <div className="home-intro">
          <ContactList />
          <h2 className="h3">I'm Jiska Heringa</h2>
          <h4>  <span className="highlighted">UX/UI designer</span></h4>
           
          <p>
          Alright! So I’m a 25-year old based in Rotterdam, The Netherlands. 

<p>With my coding background (graduated in Interactive design at Grafisch Lyceum Rotterdam, 2016). I’m soon to be graduated as a Communication multimedia designer. I'm looking for a new challenge starting begin July. </p>
<p>As a designer I think it is important to be up to date with the designtrends and search for new technology to experiment with to implement in projects. Not only do I like to design for apps and websites, through the years I also developed an intrest for experimenting and working on physical products and installations. </p>


          </p>
          <p>
          In my spare time I practise music, playing the guitar and piano. Explore the outdoors, going for hikes, surfing, or snowboarding. I’m always on the lookout for new challenges that will broaden my horizon.
          </p>
        </div>
      </header>

      <div className="nav-link-conainer">
        <span className="nav-link" to="/">
          Cases
        </span>
        <Link className="nav-link" to="/">
          Cases
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
