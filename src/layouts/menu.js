import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import BalajiSweetsLogo from '../media/balajisweets-logo.png'
import '../style/index.scss'

const Menu = ({ children, site }) => (
    <section>
        <Helmet title={site.siteMetadata.siteName} />
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <section className="container px-5">
                <div className="navbar-brand ">

                    <Link  data-text={site.siteMetadata.siteName} to="/">
                    <img src={BalajiSweetsLogo} width="175" height="75"/>
                    </Link>

                    {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a> */}
                </div>
                {/* <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <Link className="navbar-item" data-text="Home" to="/home">
                            Home
                        </Link>
                        <Link className="navbar-item" data-text="Home" to="/sweets">
                            Sweets
                        </Link>
                        <Link className="navbar-item" data-text="Home" to="/cakes">
                            Cakes
                        </Link>
                        <Link className="navbar-item" data-text="Home" to="/bulk-orders">
                            Bulk orders
                        </Link>
                        <Link className="navbar-item" data-text="Home" to="/healthy-options">
                            Healthy options
                        </Link>
                    </div>
                </div> */}
                </section>
            </nav>
    </section>
)

Menu.propTypes = {
    children: PropTypes.func,
}

export default Menu

