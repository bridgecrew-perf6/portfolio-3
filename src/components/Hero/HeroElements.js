import styled from "styled-components"

export const HeroWrapper = styled.div`
  width: 100%;
`

export const HeroTextWrapper = styled.div`
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
  width: 15%;
  @media screen and (max-width: 891px) {
    width: 50%;
    margin: 10px auto 10px auto;
  }
`
