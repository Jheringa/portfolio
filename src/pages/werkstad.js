import React from "react"
import { useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import '../components/case/styles/case.css'

const PaardPage = () => {
  const data = useStaticQuery(graphql`
    query werkstadCase {
      userjouney: file(relativePath: { eq: "woonstad-userjourney.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      merkanalyse: file(relativePath: { eq: "woonstad-merkanalyse.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stakeholdersmap: file(relativePath: { eq: "woonstad-stakeholdersmap.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bmc: file(relativePath: { eq: "woonstad-bmc.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headervisual: file(relativePath: { eq: "werkstad-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      home: file(relativePath: { eq: "woonstad-home.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      collaps: file(relativePath: { eq: "woonstad-info-pand-collaps.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      popup: file(relativePath: { eq: "woonstad-home-pop-up.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <header>
        <div className="header-visual">
          <div className="nav-link-conainer">
            <span className="nav-link" to="cases">Back</span>
            <Link className="nav-link" to="cases">Back</Link>
          </div>
          <Img fluid={data.headervisual.childImageSharp.fluid} />
        </div>
        <h1 className="header-text">Woonstad Rotterdam</h1>
        <span className="skill-set">Sketch | Photoshop | Principle</span>
        <span className="subtitle">The concept is great but the design is a little bit weak. This was for me a reason to do <span className="highlighted">re-design.</span> on this project.</span>
      </header>
      <section className="case-section" data>
        <h2 className="xl-title with-overlapping-text" data-count="1">Research</h2>
        <div className="split-wrapper centered">
          <div className="split-wrapper__column">
            <p>The main question was how can we get happiness rating 8+ and more face to face contact. After the first sprint, we found out that this was not the problem. Woonstad Rotterdam already had an 8 rating and there was not more face-to-face contact needed the entrepreneurs were happy as it was.</p>
            <p>We dug deeper on finding what they were missing. There was a lot of clearance missing. On the website, there was not that much information and it was hard to get in contact with the right person from Woonstad Rotterdam.</p>
            <p>In the beginning, we had a lot of troubles getting in contact with the target group. Most of our data were based on assumptions. Later in the process, we were more capable to get in contact with the target group and Woonstad Rotterdam and got some confirmation on our research.</p>
          </div>
          <div className="split-wrapper__column">
            <div className="split-wrapper__column">
              <Img fluid={data.userjouney.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="split-wrapper">
          <div className="split-wrapper__column">
            <Img fluid={data.merkanalyse.childImageSharp.fluid} />
          </div>
          <div className="split-wrapper__column">
            <Img fluid={data.stakeholdersmap.childImageSharp.fluid} />
          </div>
          <div className="split-wrapper__column">
            <Img fluid={data.bmc.childImageSharp.fluid} />
          </div>
        </div>
        <span className="subtitle">
          This is why we changed the research question: <span className="highlighted">How we help the entrepreneur with finding a new building?</span>
        </span>
      </section>
      <section className="case-section">
        <h2 className="xl-title with-overlapping-text" data-count="2">Concept</h2>
        <p>After all the research that we did, it was hard to find a suiting concept that would help Woonstad Rotterdam and the entrepreneurs getting a better business relationship.</p>
        <p>We came up with 6 different concepts. The employee was very enthusiastic about three of the concepts involving a business platform where they could meet up and ask each other for help, classifying emails using ai. a map where trough block-mapping it would be more clear what and who else is in the neighborhood. </p>
        <p>We found out that there is no special domain just for the entrepreneurs (like Stadwonen Rotterdam ). This was for us an opportunity to work with.</p>
        <p>We chose to make it a ‘hybrid’ app. So people would be able to download it in the app store and use the web version. It would not make any difference for the design and would be easiest for the developer.</p>

        <div className="case-highlight-block">
          <h3 className="h3__case">Final concept</h3>
          <p>We created a platform ‘Werkstad Rotterdam’ for the entrepreneur were they could log in ( as an option) and could find a building and arrange a House viewing.</p>
        </div>
      </section>
      <section className="case-section">
        <span className="subtitle">
          With a <span className="highlighted">personal touch</span>, we want to keep the people close. Let them <span className="highlighted">discover</span> new artists making sure they are having a <span className="highlighted">good time</span> with their friends.
        </span>
      </section>
      <section className="case-design case-section">
        <h2 className="xl-title with-overlapping-text" data-count="3">Re-design</h2>
        <div className="split-wrapper">
          <div className="split-wrapper__column">
            <p>My role in this process was to make the prototype and explain to my teammates how to work with programs such as Flinto and sketch. Another teammate was working on the final screens (Desktop / Mobile).</p>
            <p>For the design, it was important that it would be an upgrade of the current Woonstad Rotterdam site. Woonstad Rotterdam has a very colorful branding, they use bright colors for each section. The Entrepreneur section was blue, this was the base color of the Werkstad Rotterdam website/app.</p>
            <p>For the re-design, I chose to just do the Web version for now.</p>
            <div className="split-wrapper">
              <div className="split-wrapper__column">
                <Img fluid={data.home.childImageSharp.fluid} /></div>
              <div className="split-wrapper__column">
                <Img fluid={data.popup.childImageSharp.fluid} />
              </div>
            </div>
          </div>
          <div className="split-wrapper__column">
            <Img fluid={data.collaps.childImageSharp.fluid} />
          </div>
        </div>
      </section>
      <section className="case-section">
        <h2 className="xl-title with-overlapping-text" data-count="4">Prototype</h2>
        <p>This was the old version of the prototype for Werkstad Rotterdam.</p>
        <div class='embed-container'><iframe width="1200" height="675" src="https://www.youtube.com/embed/ZvAwIAn_1Xk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </section>
    </Layout>
  )
}

export default PaardPage
