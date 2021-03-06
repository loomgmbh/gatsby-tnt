import React from 'react'
import PropTypes from 'prop-types'

import Header from '@components/Header'
import Footer from '@components/Footer'
import { Box, Flex } from '@components/Grid'

import Menu from '@components/Menu'
import Region from './Region'

// const regionStyles = { background: 'orange', p: {[1]} }
const Layout = ({ siteTitle, children, menu, sidebar }) => {
  return (
    <Flex p={[1, 1, 1]} flexWrap="wrap">
      <Region className="header" width={1}>
        <Header siteTitle={siteTitle} />
      </Region>
      {menu ? (
        <Region className="menu" width={1}>
          <Menu />
        </Region>
      ) : null}
      {sidebar ? (
        <Region className="sidebar" width={1 / 3}>
          <Box>Sidebar</Box>
        </Region>
      ) : null}
      <Region className="main" width={sidebar ? 2 / 3 : 1}>
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
