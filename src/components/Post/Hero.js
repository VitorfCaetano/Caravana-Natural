import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import photoCredits from '../../images/camera-solid.svg'

import styles from './hero.module.scss'

const Hero = (props) => (
  <div className={styles.hero}>
    <Img 
      className={styles.image}
      sizes={props.image} 
      outerWrapperClassName="outer"
      alt={props.description}
      title={props.description}
    />
    <div className="photo_credits">
      <a href={props.credits} target="_blank">
        <img src={photoCredits} alt="Photo credits"/>
      </a>
    </div>
  </div>
)

export default Hero