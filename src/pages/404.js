import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        paddingTop: "200px",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "100px",
        color: "#242424",
      }}
    >
      <h1>404: Not Found</h1>
      <p>This page does not exist. Please try another.</p>
    </div>
  </Layout>
)

export default NotFoundPage
