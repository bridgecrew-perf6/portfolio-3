import styled from "styled-components"

export const SkillsSection = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 200px;
  @media screen and (max-width: 891px) {
    padding-top: 150px;
    height: 100%;
  }
`
export const SkillsContainer = styled.div`
  max-width: 1500px;
  padding-right: 100px;
  padding-left: 100px;
  @media screen and (max-width: 891px) {
    max-width: 100%;
    padding: 0 15px;
    margin-bottom: 15px;
  }
`
export const SkillsWrapper = styled.div`
  background-color: #242424;
  padding: 25px;
  border-radius: 8px;
`
export const SkillsGroup = styled.div`
  margin: 40px 0;
  transition: all 0.25s ease;
  h1 {
    font-weight: 300;
    font-size: 38px;
    color: #fff;
    margin: 20px 0;
  }
  p {
    font-weight: 300;
    font-size: 21px;
    color: #fff;
  }
  &:hover {
    p {
      transition: all 0.25s ease;
      transform: scale(1.01);
    }
  }
  @media screen and (max-width: 891px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 15px;
    }
  }
`
