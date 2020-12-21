import React from "react"
import PropTypes from "prop-types"
import Nav from "./Nav"
import { createGlobalStyle } from "styled-components"
import { AnimatePresence, motion } from "framer-motion"

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Ubuntu";
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Nav />
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
