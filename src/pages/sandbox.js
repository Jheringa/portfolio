import React, { useState } from "react"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This
import styles from "../components/SandboxItem/SandboxItem.module.css"

// DEZE NAAM VERANDEREN, moet uniek zijn.
const sandbox = () => {
  const data = useStaticQuery(graphql`
    query sandbox {
      headervisual: file(relativePath: { eq: "paard-interface.png" }) {
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
    // data.paard1.childImageSharp.fluid.src,
  ]

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <Layout>
      <header className="cases-header">
        <div className="nav-link-conainer">
          <span className="h1 nav-link" to="/">
            Cases
          </span>
          <Link className="h1 nav-link" to="/">
            Cases
          </Link>
        </div>
        <div className="nav-link-conainer">
          <span className="h1 nav-link" to="about">
            About
          </span>
          <Link className="h1 nav-link" to="about">
            About
          </Link>
        </div>
        <div className="nav-link-conainer">
          <span className="h1 nav-link active" to="sandbox">
            Sandbox
          </span>
          <Link className="h1 nav-link" to="sandbox">
            Sandbox
          </Link>
        </div>
      </header>

      <div className={styles.sandboxItem}>
        <div className={styles.sandboxImage}>
          <iframe
            src="https://www.youtube.com/embed/2My_SqF6nkM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className={styles.sandboxText}>
          <h4>Name: Surf shop animation</h4>
          <p>Type: UI Animation</p>
          <p>Tools: Sketch | Flinto</p>
          <p>Datum: 2019</p>
        </div>
      </div>
      <div className={styles.sandboxItem}>
        <div className={styles.sandboxImage}>
          <iframe
            src="https://www.youtube.com/embed/-wio6yBVSN8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className={styles.sandboxText}>
          <h4>Name: Button animation</h4>
          <p>Type: UI Animation</p>
          <p>Tools: Sketch | Principle</p>
          <p>Datum: 2019</p>
        </div>
      </div>
    </Layout>
  )
}

// DEZE NAAM VERANDEREN, zelfde als boven.
export default sandbox
