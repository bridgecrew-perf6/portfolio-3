import styled from "styled-components"

export const SkillsWrapper = styled.div`
  width: 100%;
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

  @media screen and (max-width: 791px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 15px;
    }
  }
`
