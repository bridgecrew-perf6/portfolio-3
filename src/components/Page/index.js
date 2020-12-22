import React from "react"
import { Section, Container } from "./PageElements"

const Page = ({ children }) => {
  return (
    <>
      <Section>
        <Container>{children}</Container>
      </Section>
    </>
  )
}

export default Page
