import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[
        "Yunus Okutan",
        "web developer",
        "software engineer",
        "Yunus",
        "react",
        "gatsby",
        "javascript",
      ]}
    />
    <HeroSection />
  </Layout>
)

export default IndexPage
