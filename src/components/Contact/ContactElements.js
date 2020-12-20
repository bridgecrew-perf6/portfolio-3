import styled from "styled-components"
import { Link } from "gatsby"

export const ContactSection = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 200px;
  @media screen and (max-width: 891px) {
    padding-top: 150px;
    margin-bottom: 15px;
    height: 100%;
  }
`
export const ContactContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding-right: 100px;
  padding-left: 100px;
  @media screen and (max-width: 891px) {
    max-width: 100%;
    padding: 0 15px;
  }
`

export const ContactHeader = styled.h1`
  font-size: 9rem;
  font-weight: 600;
  @media screen and (max-width: 891px) {
    font-size: 3rem;
  }
`

export const ContactOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  @media screen and (max-width: 891px) {
    margin-top: 50px;
  }
`

export const ContactInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 10px 0;
  @media screen and (max-width: 991px) {
    font-size: 1.4rem;
  }
`

export const ContactForm = styled.form`
  background-color: #242424;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 25px;
  margin: 25px auto 0 auto;
`

export const ContactFormInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
`
export const ContactFormOuterWrapper = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 891px) {
    flex-direction: column;
  }
`

export const Group = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`

export const Input = styled.input`
  padding: 15px;
  background-color: rgba(255, 255, 255, 1);
  margin: 0 0 25px;
  width: 90%;
  border-radius: 4px;
  border: none;
  font-size: 2rem;
  transition: ease 0.3s all;
  outline: none;
  cursor: pointer;
  &:focus {
    cursor: text;
    background-color: rgba(255, 255, 255, 0.8);
    &::placeholder {
      color: rgb(36, 36, 36);
    }
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    &::placeholder {
      color: rgb(36, 36, 36);
    }
  }
  &:not(:placeholder-shown) {
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 891px) {
    font-size: 1.5rem;
  }
`

export const Submit = styled.button`
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  width: 50%;
  float: right;
  border: none;
  color: #242424;
  margin: 0 0 5px;
  padding: 15px;
  font-size: 2rem;
  transition: 0.3s all ease;
  margin: 0 auto;
  &:hover {
    background-color: #f00946;
    transition: 0.3s all ease;
    border: none;
    color: #f9f9f9;
    transform: scale(1.01);
  }
  p {
    width: 100%;
    height: 40px;
  }
`

export const SubmitWrap = styled.div`
  width: 90%;
`

export const Textarea = styled.textarea`
  background-color: rgba(255, 255, 255, 1);
  height: 350px;
  max-width: 90%;
  resize: none;
  width: 90%;
  font-size: 2rem;
  padding: 10px;
  margin: 0 0 15px;
  border: none;
  border-radius: 4px;
  transition: ease 0.3s all;
  outline: none;
  cursor: pointer;
  &:focus {
    cursor: text;
    background-color: rgba(255, 255, 255, 0.8);
    &::placeholder {
      color: rgb(36, 36, 36);
    }
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    &::placeholder {
      color: rgb(36, 36, 36);
    }
  }
  &:not(:placeholder-shown) {
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 891px) {
    font-size: 1.5rem;
  }
`
export const ErrorMessage = styled.p`
  background-color: #f00946;
  padding: 15px;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`
