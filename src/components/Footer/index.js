import React from "react"
import { IoMdMail } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import {
  FooterSection,
  FooterContainer,
  FooterWrapper,
  Header,
  ContactOuterWrapper,
  ContactInnerWrapper,
} from "./FooterElements"

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <FooterWrapper>
            <Header>Get in touch?</Header>
            <ContactOuterWrapper>
              <ContactInnerWrapper>
                <IoMdMail style={{ marginRight: "20px" }} />
                yunusokutan@mail.com
              </ContactInnerWrapper>
              <ContactInnerWrapper>
                <FaPhone style={{ marginRight: "20px" }} />
                +45 7161 7646
              </ContactInnerWrapper>
            </ContactOuterWrapper>
          </FooterWrapper>
        </FooterContainer>
      </FooterSection>
    </>
  )
}

export default Footer
