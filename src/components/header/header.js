import React from 'react'
import Link from 'gatsby-link'

// Components
import Logo from '../logo/Logo'

import logo from '../../images/logo.svg'
import styles from './header.module.scss' 


const Header = () => {

  const handleClick = (e) => {
    const menuButton = e.target;
    const nav = document.getElementById(menuButton.dataset.target);
    console.log(menuButton);
    
    menuButton.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  }

  return (
    <nav className={"navbar " + styles.nav} role="navigation" aria-label="main navigation">
      <div className={"navbar-brand " + styles.brand}>
        <Logo style={styles.nav_logo} />

        <a 
          role="button" 
          className={"navbar-burger " + styles.burger} 
          aria-label="menu" aria-expanded="false"
          data-target="navMenu"
          onClick={(e) => handleClick(e)}
        >
          <span aria-hidden="true" data-target="navMenu"></span>
          <span aria-hidden="true" data-target="navMenu"></span>
          <span aria-hidden="true" data-target="navMenu"></span>
        </a> 
      </div> 

      <div id="navMenu" className="navbar-menu">
        <div className={"navbar-end " + styles.menu}>
          <Link to="/" className="navbar-item">HOME</Link>
          <Link to="/o-time/" className="navbar-item">O TIME</Link>
          <Link to="/sobre/" className="navbar-item">SOBRE NÓS</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header