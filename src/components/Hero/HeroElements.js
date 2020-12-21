import styled from "styled-components"

export const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 200px;
  @media screen and (max-width: 891px) {
    padding-top: 150px;
    height: 100%;
  }
`
export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 100px 0 100px;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 891px) {
    padding: 0;
    margin: 0 auto;
  }
`
export const HeroRow = styled.div`
  background-color: #242424;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  width: 100%;
  flex-direction: column;
  padding: 50px 50px;
  @media screen and (max-width: 891px) {
    padding: 0;
    margin: 0 15px 15px 15px;
  }
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
    font-weight: 600;
    font-size: 46px;
    line-height: 67px;
    color: #fff;
  }
  p {
    margin-top: 50px;
    color: #fff;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
  }
  @media screen and (max-width: 891px) {
    padding: 0 25px;
    h1 {
      font-weight: 600;
      font-size: 25px;
      line-height: 47px;
    }
    p {
      margin-bottom: 20px;
      font-weight: 300;
      font-size: 18px;
    }
  }
`
export const HeroImgWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  @media screen and (max-width: 891px) {
    width: 50%;
    margin: 20px auto 0 auto;
  }
`
