import styled from "styled-components"

export const Spinner = styled.div`
  content: " ";
  margin: 0 auto;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const ContactCol = styled.div`
  width: 100%;
`

export const ContactHeader = styled.h1`
  font-size: 8.2rem;
  font-weight: 600;
  color: #fff;
  text-align: left;

  @media screen and (max-width: 1700px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 791px) {
    font-size: 3rem;
  }
`

export const ContactOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  @media screen and (max-width: 1150px) {
    margin: 25px 0;
  }
`

export const ContactInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.1rem;
  font-weight: 600;
  margin: 10px 0;
  a {
    text-decoration: none;
    color: #fff;
    transition: all 0.5s ease;
  }
  a:hover {
    transition: all 0.5s ease;
    color: #f00946;
  }

  @media screen and (max-width: 791px) {
    font-size: 1.1rem;
  }
`

export const ContactFormText = styled.div`
  width: 100%;
`

export const ContactFormTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: left;
  p {
    width: 100%;
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #fff;
  }

  @media screen and (max-width: 791px) {
    width: 100%;
    p {
      font-size: 1rem;
    }
  }
`

export const ContactForm = styled.form`
  width: 60%;
  height: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1150px) {
    width: 100%;
  }
`

export const ContactFormInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactFormOuterWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const Group = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`

export const Input = styled.input`
  padding: 15px;
  background-color: rgba(255, 255, 255, 1);
  margin: 0 0 8px;
  width: 100%;
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

  @media screen and (max-width: 791px) {
    font-size: 1.2rem;
  }
`

export const Submit = styled.button`
  background-color: rgba(240, 9, 70, 0.8);
  border-radius: 4px;
  cursor: pointer;
  width: 50%;
  float: right;
  border: none;
  color: #fff;
  margin: 0 0 5px;
  padding: 15px;
  font-size: 2rem;
  transition: 0.3s all ease;
  margin: 0 auto;
  &:hover {
    background-color: #f00946;
    transition: 0.3s all ease;
    border: none;
  }
  p {
    width: 100%;
    height: 40px;
  }
`

export const SubmitWrap = styled.div`
  width: 100%;
`

export const Textarea = styled.textarea`
  background-color: rgba(255, 255, 255, 1);
  height: 350px;
  max-width: 100%;
  resize: none;
  width: 100%;
  font-size: 2rem;
  padding: 10px;
  margin: 0 0 8px;
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

  @media screen and (max-width: 791px) {
    font-size: 1.2rem;
  }
`
export const ErrorMessage = styled.p`
  background-color: #f00946;
  padding: 15px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`
