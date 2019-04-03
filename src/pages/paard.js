import React from "react"
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import '../components/case/styles/case.css'

const PaardPage = () => {
  const data = useStaticQuery(graphql`
    query paardCase {
      flowchart: file(relativePath: { eq: "flowchart-paard.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headervisual: file(relativePath: { eq: "fabrique-paard-case-957x712.png" }) {
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
    }
  `)

  return (
    <Layout>
      <header>
        <div className="header-visual">
          <Img fluid={data.headervisual.childImageSharp.fluid} />
        </div>
        <h1 className="header-text">Surprise Paard</h1>
        <span className="subtitle">We got the assignment by Fabrique | Paard Den Haag. The question was: <span className="highlighted">'How can we get people to return to Paard Den Haag'.</span> We worked in a team of 4 people, our target group was the age 23 to 28.</span>
      </header>
      <section>
        <h2 className="xl-title with-overlapping-text">Research</h2>
        <p>The start phase was research about the target group what were there main reasons that they would go out and where they went.</p>
        <div className="results">
          <h3 className="h3__case">Values and goals</h3>
          <div>
            <strong className="result-list-title">Paard</strong>
            <ul className="result-list">
              <li>- Happiness</li>
              <li>- Proud</li>
              <li>- Surprises</li>
              <li>- intimate</li>
            </ul>
          </div>
          <div>
            <strong className="result-list-title">Target group</strong>
            <ul className="result-list">
              <li>- Discover new artists</li>
              <li>- Meet new people</li>
              <li>- Be with friends</li>
              <li>- Able to make choices</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="xl-title with-overlapping-text">Concepting</h2>
        <p>We had a hard time coming up with a concept. This was because we found out that the problem didn't lie in that people didn't wanted to come back but the fact that they simply didn't knew about the artist that were playing in Paard. The marketing side of Paard was outdated and hard to find.</p>
        <div className="split-wrapper">
          <h3 className="h3__case">Design criteria</h3>
          <div className="split-wrapper__column">
            <strong>Socialize</strong>
            <p>It is very important for our target group to meet up with their friend. Therefor we want social
            media to be a part of our concept. A way to invite your friends or meet new people</p>
          </div>
          <div className="split-wrapper__column">
            <strong>Experience</strong>
            <p>We want the user to have an unforgetable night at paard.
            Trough discovering new music and socializing with their inner circle.</p>
          </div>
          <div className="split-wrapper__column">
            <strong>Discover</strong>
            <p>Our target group is in for an adventure. We provide the option to exploring new artist (in the genre of your choosing).</p>
          </div>
        </div>

        <div className="split-wrapper">
          <div className="split-wrapper__column">
            <p>To go around this problem we came with the idea to create a concept party. This party would be called "Surprise paard". In this concept you pick your genre, pick a date that you're avalible and invite your friends and will be surprised with a party in that theme. Paard also wanted to be personal with their clients, this is why when you bought a ticket you will recieve a personalized Paard kaart a couple days later on your doorstep. This card is not only your ticket, for people that can't wait you can also scan the card and it will reviel the artist that will play that night!</p>
          </div>
          <div className="split-wrapper__column case-highlight-block">
            <h3 className="h3__case">Final concept</h3>
            <p>We organise a well arranged party. It’s up to you to invite your friends (or not) choose a genre and pick a date. We will surprise you with an artist your chosen genre. In that way you can discover new artists and expand your spotify list. As a cherry on top we will send you your special invite card (also your entrance ticket) at home! </p></div>
        </div>
      </section>
      <section>
        <span className="subtitle">
          With a <span className="highlighted">personal touch</span> we want to keep the people close. Let them <span className="highlighted">discover</span> new artist and making sure they have a <span className="highlighted">good time</span> with their friend.
        </span>
      </section>
      <section className="case-design">
        <h2 className="xl-title with-overlapping-text">Design</h2>
        <p>My task in this procces was design and prototype the webpage. To do this It was nessesary to figure out the flow and to keep everything in the Paard branding.</p>
        <h3 className="h3__case">Style guide</h3>
        <Img fluid={data.styleguide.childImageSharp.fluid} />
        <h3 className="h3__case">Flowchart</h3>
        <Img fluid={data.flowchart.childImageSharp.fluid} />
      </section>
      <section>
        <h2 className="xl-title with-overlapping-text">Prototype</h2>
        <p>This was the first time to work with principle. I chose this program because I wanted to try something else other than adobe XD or invision. It was fine program to work with but I missed the abilty to easily click trough differents paths without having to drawing it out.</p>
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Jl23blit5kk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </section>
    </Layout>
  )
}

export default PaardPage
