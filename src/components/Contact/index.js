import React, { useEffect, useState, useRef } from "react"
import { IoMdMail } from "react-icons/io"
import { FaPhone, FaTimes } from "react-icons/fa"
import {
  ContactSection,
  ContactContainer,
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
} from "./ContactElements"

const Contact = () => {
  const initialInputs = {
    name: "",
    email: "",
    number: "",
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
          <ContactForm
            action="https://formspree.io/f/xoqpnvwb"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div
              style={{
                width: "50%",
                justifyContent: "center",
                display: "flex",
                margin: "10px 0",
              }}
            >
              {showError && (
                <ErrorMessage>
                  Et eller flere felter mangler
                  <FaTimes
                    onClick={() => setShowError(false)}
                    style={{ cursor: "pointer" }}
                  />
                </ErrorMessage>
              )}
            </div>
            <ContactFormOuterWrapper>
              <ContactFormInnerWrapper>
                <Group>
                  <Input
                    type="text"
                    value={inputs.name}
                    onChange={handleInputElements}
                    placeholder="Navn*"
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
                    placeholder="Nummer*"
                    name="number"
                    ref={contactRef}
                  />
                </Group>
              </ContactFormInnerWrapper>
              <ContactFormInnerWrapper>
                <Group>
                  <Textarea
                    value={inputs.texts}
                    onChange={handleInputElements}
                    placeholder="Skriv en besked*"
                    name="message"
                    ref={contactRef}
                  />
                </Group>
                <Group>
                  <SubmitWrap>
                    {status === "SUCCESS" ? (
                      <p>Tak for din besked!</p>
                    ) : (
                      <Submit type="submit" disabled={spinner}>
                        {spinner ? <Spinner /> : <p>Send</p>}
                      </Submit>
                    )}
                    {status === "ERROR" && (
                      <p>Ooops! Der opstod en fejl. Venligst prøv igen.</p>
                    )}
                  </SubmitWrap>
                </Group>
              </ContactFormInnerWrapper>
            </ContactFormOuterWrapper>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
    </>
  )
}

export default Contact
