import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { IoMdMail } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import {
  HeroSection,
  HeroContainer,
  HeroRow,
  HeroFirstCol,
  HeroSecondCol,
  HeroWrapper,
  HeroImgWrapper,
} from "./HeroElements"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      meImage: file(relativePath: { eq: "mig.png" }) {
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
      <HeroSection>
        <HeroContainer>
          <HeroRow>
            <HeroFirstCol>
              <HeroImgWrapper>
                <Img
                  imgStyle={{ borderRadius: "100%", filter: "grayscale(1)" }}
                  fluid={data.meImage.childImageSharp.fluid}
                  fadeIn
                />
              </HeroImgWrapper>
            </HeroFirstCol>
            <HeroSecondCol>
              <HeroWrapper>
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </HeroWrapper>
            </HeroSecondCol>
          </HeroRow>
        </HeroContainer>
      </HeroSection>
    </>
  )
}

export default Hero
