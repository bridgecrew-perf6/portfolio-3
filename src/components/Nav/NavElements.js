import styled from "styled-components"
import { Link } from "gatsby"

export const NavSection = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  z-index: 99;
  padding-top: 40px;
`

export const NavContainer = styled.div`
  display: flex;
  max-width: 1500px;
  margin: 0 auto;
  padding-right: 100px;
  padding-left: 100px;
  justify-content: flex-end;
`

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SocialMenu = styled.div`
  display: flex;
  justify-content: flex-end;
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
  justify-content: center;
  list-style: none;
  margin-top: 20px;
`

export const NavItem = styled.li`
  height: 70px;
  margin-left: 7px;
  border-bottom: 4px solid transparent;
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
