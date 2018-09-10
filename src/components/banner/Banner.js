import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

// Images
import photoCredits from '../../images/camera-solid.svg'
import penLogo from '../../images/pen-solid.svg'
import published from '../../images/calendar-alt-solid.svg'

import styles from './banner.module.scss' 

const outer = {
  height: '100%'
}

const Banner = (props) => (
  <article className={styles.banner_article}>
    
    {/* <img className={styles.banner_image} src={props.image} alt={props.title}/> */}
    <Img 
      sizes={props.image} 
      className={styles.banner_image} 
      outerWrapperClassName="outer"
      alt={props.title}
      title={props.title}
    />
    <div className="overlay"></div>

    <div className={styles.banner_panel}>
      <h2 className={styles.week_article}>História da Semana</h2>

      <div className={styles.banner_info}>
        <h2 className={styles.title}>
          {props.title}
        </h2>

        <div className={styles.contributor}>
          <div className={styles.author}>
            <img src={penLogo} alt="Post's author"/>
            {props.author}
          </div>
          <div>
            <img src={published} alt="Date published"/>
            {props.date}
          </div>
        </div>

        <Link to={props.slug} className={styles.button}>
          LER MAIS
        </Link>
      </div>

      <div className="photo_credits">
        <a href={props.credits} target="_blank">
          <img src={photoCredits} alt="Photo credits"/>
        </a>
      </div>
    </div>
  </article>
)

export default Banner