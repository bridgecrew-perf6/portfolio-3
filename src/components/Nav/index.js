import React, { useState, useEffect } from "react"
import { FaTimes } from "react-icons/fa"
import { RiMenu3Line } from "react-icons/ri"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import {
  NavSection,
  NavContainer,
  NavWrapper,
  SocialMenu,
  NavMenu,
  SocialLink,
  NavItem,
  NavLink,
  MobileIcon,
  SocialMenuWrapper,
} from "./NavElements"

const Nav = () => {
  const ACTIVE_STYLE = {
    borderBottom: "8px solid #f00946",
  }

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const isScrolling = () => {
    if (window.pageYOffset > 0) setClick(false)
  }

  useEffect(() => {
    isScrolling()
    window.addEventListener("scroll", isScrolling)
    return () => {
      window.removeEventListener("scroll", isScrolling)
    }
  }, [])

  return (
    <>
      <NavSection>
        <NavContainer>
          <NavWrapper>
            <SocialMenu>
              <SocialMenuWrapper>
                <SocialLink
                  href="https://github.com/yunus-cookies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/yunus-emre-okutan-74b658141"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </SocialLink>
              </SocialMenuWrapper>
              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <RiMenu3Line />}
              </MobileIcon>
            </SocialMenu>
            <NavMenu isClick={click}>
              <NavItem>
                <NavLink
                  to="/"
                  onClick={() => setClick(false)}
                  activeStyle={ACTIVE_STYLE}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/skills/"
                  onClick={() => setClick(false)}
                  activeStyle={ACTIVE_STYLE}
                >
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact/"
                  onClick={() => setClick(false)}
                  activeStyle={ACTIVE_STYLE}
                >
                  Contact
                </NavLink>
              </NavItem>
            </NavMenu>
          </NavWrapper>
        </NavContainer>
      </NavSection>
    </>
  )
}

export default Nav
