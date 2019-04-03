import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactList from '../components/ContactList'

import styles from '../components/AboutHeader/styles/About.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header className={styles.header}>
      <h1 className={styles.title}>Hello!</h1>
      <div className={styles.image}></div>
      <ContactList />

    </header>
    <div>
      <h2 className="h3">I'm Jiska Heringa I like <span className="highlighted">UX/UI design</span></h2>
      <p>Alright! so I’m 23 year old based in Rotterdam. In 2016 I graduated in Interactive design (english) at Grafisch lyceum Rotterdam.
      The study was focuses on branding and webcoding using html/css and the basics of javascript and php.
      Currently I’m studying at Hogeschool Rotterdam (CMD), Where I’m focussing on ux/ui and concepting.</p>

      <p>In my spare time I work as a chef. Also I like to practise music, playing the guitar and piano.
      Or might be found on the beach catching waves (:</p>
    </div>

    <Link to="#">cases</Link>
  </Layout>
)

export default IndexPage
