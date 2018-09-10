import React from 'react'
import Link from 'gatsby-link'

// Components
import Logo from '../logo/Logo'

import logo from '../../images/logo.svg'
import styles from './footer.module.scss' 



const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      
      <div className={styles.brand}>
        <div className={styles.brand_logo}>
          <Logo />
        </div>
        <div className={styles.brand_name}>
          <span className={styles.name}>
            Caravana
          </span>
          <span className={styles.name}>
            Natural
          </span>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <span>
          © 2018. Todos os direitos reservados.
        </span>
      </div>
    </div>
  </footer>
)


export default Footer