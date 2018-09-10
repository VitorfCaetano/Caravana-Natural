import React from 'react'
import Link from 'gatsby-link'

import logo from '../../images/logo.svg'

const Logo = (props) => (
  <Link className={props.style} to="/">
    <img src={logo} alt="Caravana Natural"/>
  </Link>
)

export default Logo