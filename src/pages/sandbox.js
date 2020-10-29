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
            src="https://www.youtube.com/embed/5OqAq1yCOA4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className={styles.sandboxText}>
          <h4>Parallax scoll</h4>
          <p>
            <b>Type:</b> UI Animation
          </p>
          <p>
            <b>Tools:</b> Figma | Principle
          </p>
          <p>
            <b>Datum:</b> 2020
          </p>
        </div>
      </div>
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
          <h4>Surf shop animation</h4>
          <p>
            <b>Type:</b> UI Animation
          </p>
          <p>
            <b>Tools:</b> Sketch | Flinto
          </p>
          <p>
            <b>Datum:</b> 2019
          </p>
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
          <h4>Button animation</h4>
          <p>
            <b>Type:</b> UI Animation
          </p>
          <p>
            <b>Tools:</b> Sketch | Principle
          </p>
          <p>
            <b>Datum:</b> 2019
          </p>
        </div>
      </div>
      <div className={styles.sandboxItem}>
        <div className={styles.sandboxImage}>
          <iframe
            src="https://www.youtube.com/embed/ghCnUzlwsDs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className={styles.sandboxText}>
          <h4>Ethical Product design</h4>
          <p>
            <b>Type:</b> Ethical product manifest
          </p>
          <p>
            <b>Datum:</b> 2020
          </p>
        </div>
        <div className={styles.sandboxTextSpecial}>
          <b> Project description:</b>
          <p>
            {" "}
            <p>
              For a school assignment we had to find a service or product that
              we found unethical and find a solution. The product that I chose
              was Google home (or a similar product).
            </p>
            <p>
              The problem is that with its use the company will gather lots of
              personal information which they use to show you targeted
              advertisements. Users are often not aware of the targeted
              information or they are but say that they have nothing to hide.
              But what if in the future big companies control the data we see
              and thereby influence the decisions we make. Are the decisions
              still ours or is it all planned out for us? Do we want to live in
              a society in where prices are based on our data? (for example
              health insurance or taxes) My main goal was to give the user a bit
              of their privacy back.
            </p>
            <p>
              I came up with several solutions like an incognito button or a
              function to delete your data after a certain amount of time. But
              non of these ideas would make the user more in controle of their
              data. It would only give the feeling of more security but in the
              end there would be no real prove that data would actually be
              deleted or incognito. Therefor rather than solving a part of the
              problem I wanted to make people more aware of the issue. I believe
              that awareness and understanding the consequences is the first
              step to making a behaviour change.
            </p>
            <p>
              The device I created comes with the Google home. After you make a
              search request or other comment it will physically print out all
              the terms that Google picks out of the request. The reason that it
              will be physicalised is it will be way more confronting than when
              you receive a text. This way I want to make the user aware about
              how many terms will be picked up by smart devices, even if you're
              just asking/looking for simple and harmless questions.
            </p>
          </p>
        </div>
      </div>
      <p />
    </Layout>
  )
}

// DEZE NAAM VERANDEREN, zelfde als boven.
export default sandbox
