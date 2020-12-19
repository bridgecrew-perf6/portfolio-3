import React from "react"
import { IoMdMail } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import {
  ContactSection,
  ContactContainer,
  ContactHeader,
  ContactOuterWrapper,
  ContactInnerWrapper,
} from "./ContactElements"

const Contact = () => {
  return (
    <>
      <ContactSection>
        <ContactContainer>
          <ContactHeader>Get in touch?</ContactHeader>
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
        </ContactContainer>
      </ContactSection>
    </>
  )
}

export default Contact
