import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import photoCredits from '../../images/camera-solid.svg'
import penLogo from '../../images/pen-solid.svg'

import styles from './article.module.scss' 

const Article = (props) => {
  const category = {
    vida: 'life_category',
    aventura: 'adventure_category',
    filosofia: 'philosophy_category'
  }
  return (
    <article className={styles.card}>
      <div className={styles.card_image}>
        <Link to={props.slug}>
          {/* <img src={props.image} alt="" className={styles.image}/> */}
          <Img 
            sizes={props.image} 
            className={styles.image}
            outerWrapperClassName="outer" 
            alt={props.title}
            title={props.title}
           />
          <div className="overlay"></div>
        </Link>
        <div className="photo_credits">
          <a href={props.credits} target="_blank">
            <img src={photoCredits} alt="Photo credits"/>
          </a>
        </div>
      </div>
      
      <div className={styles.card_section + ' ' + category[props.category]}>
        <Link to={props.slug}>
          <div className={styles.category}>
            <img src={props.categoryLogo} alt={props.category}/>
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.author}>
              <img src={penLogo} alt="Post's author"/>
              {props.author}
            </div>
          </div>
        </Link>
      </div>
    </article>
  )
}

export default Article