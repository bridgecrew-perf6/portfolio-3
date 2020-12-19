import styled from "styled-components"
import { Link } from "gatsby"

export const ContactSection = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 200px;
  background-color: #2e352e;
`
export const ContactContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding-right: 100px;
  padding-left: 100px;
`

export const ContactHeader = styled.h1`
  font-size: 9rem;
  font-weight: 600;
`

export const ContactOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`

export const ContactInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 10px 0;
`
