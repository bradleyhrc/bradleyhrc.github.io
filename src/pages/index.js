import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Experience from "../components/experience"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <Header></Header>
    <About></About>
    <Experience></Experience>
    
  </Layout>
)
//  title="BRADLEY HC"
// <Work></Work>
// <Skills></Skills>
// <Promotion></Promotion>
// <Footer></Footer>

export default IndexPage
