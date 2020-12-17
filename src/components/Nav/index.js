import React, { useState, useEffect } from "react"
import { FaTimes } from "react-icons/fa"
import { RiMenu3Line } from "react-icons/ri"
import { IconContext } from "react-icons/lib"
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
} from "./NavElements"

const Nav = () => {
  const ACTIVE_STYLE = {
    borderBottom: "8px solid red",
  }

  return (
    <>
      <NavSection>
        <NavContainer>
          <NavWrapper>
            <SocialMenu>
              <SocialLink to="/">
                <FaGithub />
              </SocialLink>
              <SocialLink to="/">
                <FaLinkedinIn />
              </SocialLink>
            </SocialMenu>
            <NavMenu>
              <NavItem>
                <NavLink to="/" activeStyle={ACTIVE_STYLE}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/skills" activeStyle={ACTIVE_STYLE}>
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" activeStyle={ACTIVE_STYLE}>
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
