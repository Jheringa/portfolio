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
          <h2 className="h3">
            I'm Jiska Heringa I like{" "}
            <span className="highlighted">UX/UI design</span>
          </h2>
          <p>
            Alright! so I’m 25-year old based in Rotterdam. In 2016 I graduated
            in Interactive design (English) at Grafisch Lyceum Rotterdam. The
            study focused on branding and web coding using HTML/CSS and the
            basics of javascript and PHP. Currently, I’m studying at Hogeschool
            Rotterdam (CMD), Where I’m focussing on UX/UI and concept.
          </p>
          <p>
            In my spare time, I like to practise music, playing the guitar and
            piano. Or might be found on the beach catching waves (:
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
