import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Menu from './menu'
import '../style/index.scss'

const Layout = ({ children, site }) => {
  return (
    <div className="container has-fixed-top">
      <div>
        <Helmet title={site.siteMetadata.siteName} />
          <div className="hero-head">
          <Menu site={site}></Menu>
          </div>
          <div className="hero-body">
            {children}
          </div>
          <div className="hero-footer">I am footer</div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

