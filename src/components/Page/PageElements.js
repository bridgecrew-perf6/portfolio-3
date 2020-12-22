import styled, { css } from "styled-components"

export const Section = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 200px;
  margin-bottom: 100px;
  @media screen and (max-width: 891px) {
    margin-top: 100px;
    margin-bottom: 0;
    padding: 0 12px 12px 12px;
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 100px;
  border-radius: 8px;
  background-color: #242424;
  padding: 50px;
  @media screen and (max-width: 891px) {
    padding: 30px;
    margin: 0 auto;
  }
  ${props =>
    props.contact &&
    css`
      display: flex;
      flex-direction: row;
      @media screen and (max-width: 891px) {
        flex-direction: column;
      }
    `}
`
