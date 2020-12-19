import styled from "styled-components"
import { Link } from "gatsby"

export const HeroSection = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 200px;
  @media screen and (max-width: 891px) {
    padding-top: 150px;
  }
`
export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  padding: 100px 0;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 891px) {
    padding: 0;
  }
`
export const HeroRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
`

export const HeroFirstCol = styled.div`
  flex-basis: 20%;
  max-width: 20%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 891px) {
    flex-basis: 100%;
    max-width: 100%;
    margin-bottom: 10px;
  }
`
export const HeroSecondCol = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  margin-left: 20px;
  @media screen and (max-width: 891px) {
    flex-basis: 100%;
    max-width: 100%;
    margin-left: 0;
  }
`

export const HeroWrapper = styled.div`
  h1 {
    font-weight: 300;
    font-size: 46px;
    line-height: 67px;
    color: #242424;
  }
  p {
    margin-top: 50px;
    color: #242424;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
  }
  @media screen and (max-width: 891px) {
    padding: 0 30px;
    h1 {
      font-weight: 300;
      font-size: 26px;
      line-height: 47px;
      color: #242424;
    }
    p {
      margin-bottom: 20px;
    }
  }
`
export const HeroImgWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  @media screen and (max-width: 891px) {
    width: 50%;
  }
`
