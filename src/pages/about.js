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
          <p>
            Alright! So I’m a 25-year old based in Rotterdam. I'm a
            Communication multimedia design student With a great passion for
            experimenting and working on physical products and installations.
            With my coding background (graduated in Interactive design at
            Grafisch Lyceum Rotterdam, 2016), I like to challenge myself to
            tryout techniques such as AR/VR. In september I'm starting the minor
            Smart material for behaviour change. For my graduation project I
            would like to discover more new technology and use them in projects.
            Topics that I would like to work with sound and light combining with
            topics like future living, sustainability, food or music. With the
            goal to inspire, entertain, and educate the user.
          </p>
          <p>
            In In my spare time I try to do small experiments with musical
            instruments or food dishes. Or I might be found on the beach
            catching waves (:
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
