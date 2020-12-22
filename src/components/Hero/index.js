import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { HeroWrapper, HeroImgWrapper, HeroTextWrapper } from "./HeroElements"
import { Section, Container } from "../Page/PageElements"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      meImage: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Section>
        <Container>
          <HeroWrapper>
            <HeroImgWrapper>
              <Img
                imgStyle={{ borderRadius: "100%" }}
                fluid={data.meImage.childImageSharp.fluid}
                alt="Yunus Okutan"
                fadeIn
              />
            </HeroImgWrapper>
            <HeroTextWrapper>
              <h1>
                Hello. I&#39;m <span style={{ color: "#f00946" }}>Yunus</span>,
                a curious web developer and software engineer. I develop web
                applications utilizing both frontend and backend. My strength
                lies in <span style={{ color: "#f00946" }}>React</span>, but I
                have experience in both JQuery and vanilla Javascript. Backend
                and frontend programming is not a stranger to me, and I love to
                be engaged in both. I graduated with a bachelor's degree in
                Computer Science at{" "}
                <span style={{ color: "#f00946" }}>UCPH</span>, Denmark 2017.
                <br></br>
                Feel free to contact me for any job related topic :)
              </h1>
              <p>Web developer, Software engineer and React enthusiast.</p>
            </HeroTextWrapper>
          </HeroWrapper>
        </Container>
      </Section>
    </>
  )
}

export default Hero
