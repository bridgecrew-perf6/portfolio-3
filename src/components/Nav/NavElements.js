import styled from "styled-components"
import { Link } from "gatsby"

export const NavSection = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 99;
  padding-top: 40px;
  background-color: #fff;
`

export const NavContainer = styled.div`
  display: flex;
  max-width: 1500px;
  margin: 0 auto;
  padding-right: 100px;
  padding-left: 100px;
  justify-content: flex-end;
  @media screen and (max-width: 891px) {
    max-width: 100%;
    padding: 0;
  }
`

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SocialMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 891px) {
    justify-content: space-between;
  }
`

export const SocialMenuWrapper = styled.div`
  @media screen and (max-width: 891px) {
    margin-left: 25px;
  }
`

export const SocialLink = styled(Link)`
  margin-left: 5px;
  font-size: 2rem;
  color: #242424;
  &:hover {
    transform: scale(1.1);
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  padding-top: 20px;

  @media screen and (max-width: 891px) {
    flex-direction: column;
    width: 100%;
    position: absolute;
    opacity: 1;
    top: 80px;
    left: ${({ isClick }) => (isClick ? "0" : "-100%")};
    background-color: ${({ isClick }) => (isClick ? "#fff" : "transparent")};
    height: 100vh;
    transition: all 0.5s ease;
    justify-content: flex-start;
  }
`

export const NavItem = styled.li`
  height: 70px;
  margin-left: 7px;
  border-bottom: 4px solid transparent;
  @media screen and (max-width: 891px) {
    margin-bottom: 50px;
  }
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #242424;
  font-size: 2rem;
  text-decoration: none;
  padding: 0.5rem 0 0.5rem 2rem;
  height: 100%;
  &:hover {
    border-bottom: 4px solid red;
  }
  @media screen and (max-width: 891px) {
    padding: 0;
  }
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 891px) {
    display: flex;
    font-size: 2rem;
    justify-content: flex-end;
    margin-right: 25px;
  }
`

/**
 *   &:hover::after {
    border-bottom: 4px solid red;
    width: 100%;
    transition: width 0.6s;
  }
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #de591b;
    transition: width 0.3s;
  }
 */
