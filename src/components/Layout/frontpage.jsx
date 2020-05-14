import React from 'react'
import PropTypes from 'prop-types'

import Header from '@components/Header'
import Footer from '@components/Footer'
import { Box, Flex } from '@components/Grid'

import Region from './Region'

// const regionStyles = { background: 'orange', p: {[1]} }
const Layout = ({ siteTitle, children }) => {
  return (
    <Flex p={[1, 1, 1]} flexWrap="wrap">
      <Region className="header" width={1}>
        <Header siteTitle={siteTitle} />
      </Region>
      <Region className="menu" width={1}>
        <Box>Main Menu!</Box>
      </Region>
      <Region className="sidebar" width={1 / 3}>
        <Box>Sidebar</Box>
      </Region>
      <Region className="main" width={2 / 3}>
        <Box>{children}</Box>
      </Region>
      <Region className="footer" width={1}>
        <Footer> </Footer>
      </Region>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  siteTitle: PropTypes.string,
}

Layout.defaultProps = {
  children: null,
  siteTitle: null,
}

export default Layout