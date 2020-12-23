import styled, { css } from "styled-components"

export const Section = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 200px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1150px) {
    padding: 0 12px 12px 12px;
    max-width: 100%;
  }

  @media screen and (max-width: 791px) {
    margin-top: 100px;
    padding: 0 12px 12px 12px;
    max-width: 100%;
  }
`

export const Container = styled.div`
  background-color: #242424;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  max-width: 1500px;
  padding: 50px;
  text-align: left;

  @media screen and (max-width: 791px) {
    padding: 30px;
    margin: 0 auto;
    text-align: center;
  }
  ${props =>
    props.contact &&
    css`
      display: flex;
      flex-direction: row;

      @media screen and (max-width: 1150px) {
        flex-direction: column;
      }
    `}
`
