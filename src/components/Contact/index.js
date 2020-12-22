import React, { useState, useRef } from "react"
import { IoMdMail } from "react-icons/io"
import { FaPhone, FaTimes } from "react-icons/fa"
import {
  ContactCol,
  ContactHeader,
  ContactOuterWrapper,
  ContactInnerWrapper,
  ContactForm,
  ContactFormOuterWrapper,
  ContactFormInnerWrapper,
  Input,
  Group,
  SubmitWrap,
  Submit,
  Spinner,
  Textarea,
  ErrorMessage,
  ContactFormText,
  ContactFormTextWrapper,
} from "./ContactElements"
import { Section, Container } from "../Page/PageElements"

const Contact = () => {
  const initialInputs = {
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  }

  const contactRef = useRef()
  const [inputs, setInputs] = useState(initialInputs)
  const [status, setStatus] = useState("")
  const [spinner, setSpinner] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (!contactRef.current.value) {
      setShowError(true)
    } else {
      setShowError(false)
      setSpinner(true)
      const form = e.target
      const data = new FormData(form)
      const xhr = new XMLHttpRequest()
      xhr.open(form.method, form.action)
      xhr.setRequestHeader("Accept", "application/json")
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        if (xhr.status === 200) {
          form.reset()
          setStatus("SUCCESS")
          setSpinner(false)
          setInputs(initialInputs)
        } else {
          setStatus("ERROR")
          setSpinner(false)
        }
      }
      xhr.send(data)
    }
  }

  /** [name] works as a dynamic key in object. */
  const handleInputElements = e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  return (
    <>
      <Section>
        <Container contact>
          <ContactCol>
            <ContactHeader>Get in touch?</ContactHeader>
            <ContactOuterWrapper>
              <ContactInnerWrapper>
                <IoMdMail style={{ color: "#fff", marginRight: "20px" }} />
                <a href="mailto:yunusokutan@mail.com">yunusokutan@mail.com</a>
              </ContactInnerWrapper>
              <ContactInnerWrapper>
                <FaPhone style={{ color: "#fff", marginRight: "20px" }} />
                <a href="tel:+4571617646">+45 7161 7646</a>
              </ContactInnerWrapper>
            </ContactOuterWrapper>
          </ContactCol>
          <ContactForm
            action="https://formspree.io/f/mqkggelg"
            method="POST"
            onSubmit={handleSubmit}
          >
            <ContactFormText>
              <ContactFormTextWrapper>
                {showError && (
                  <ErrorMessage>
                    Et eller flere felter mangler
                    <FaTimes
                      onClick={() => setShowError(false)}
                      style={{ cursor: "pointer" }}
                    />
                  </ErrorMessage>
                )}
              </ContactFormTextWrapper>
              <ContactFormTextWrapper>
                <p>Please fill the contact form below:</p>
              </ContactFormTextWrapper>
            </ContactFormText>
            <ContactFormOuterWrapper>
              <ContactFormInnerWrapper>
                <Group>
                  <Input
                    type="text"
                    value={inputs.name}
                    onChange={handleInputElements}
                    placeholder="Name*"
                    name="name"
                    ref={contactRef}
                  />
                </Group>
                <Group>
                  <Input
                    type="email"
                    value={inputs.email}
                    onChange={handleInputElements}
                    placeholder="Email*"
                    name="email"
                    ref={contactRef}
                  />
                </Group>
                <Group>
                  <Input
                    type="tel"
                    value={inputs.number}
                    onChange={handleInputElements}
                    placeholder="Number*"
                    name="number"
                    ref={contactRef}
                  />
                </Group>
                <Group>
                  <Input
                    type="text"
                    value={inputs.subject}
                    onChange={handleInputElements}
                    placeholder="Subject*"
                    name="subject"
                    ref={contactRef}
                  />
                </Group>
              </ContactFormInnerWrapper>
              <ContactFormInnerWrapper>
                <Group>
                  <Textarea
                    value={inputs.texts}
                    onChange={handleInputElements}
                    placeholder="Write your comment*"
                    name="message"
                    ref={contactRef}
                  />
                </Group>
                <Group>
                  <SubmitWrap>
                    {status === "SUCCESS" ? (
                      <p style={{ color: "#fff", fontSize: "1.5rem" }}>
                        Thank you!
                      </p>
                    ) : (
                      <Submit type="submit" disabled={spinner}>
                        {spinner ? <Spinner /> : <p>Send</p>}
                      </Submit>
                    )}
                    {status === "ERROR" && (
                      <p style={{ color: "#fff", fontSize: "1.5rem" }}>
                        Ooops! Something went wrong. Please try again.
                      </p>
                    )}
                  </SubmitWrap>
                </Group>
              </ContactFormInnerWrapper>
            </ContactFormOuterWrapper>
          </ContactForm>
        </Container>
      </Section>
    </>
  )
}

export default Contact
