import React from 'react'
import Link from 'gatsby-link'

import styles from './contributor.module.scss'

const Contributor = (props) => (

  <div className={styles.card}>
    <div className={styles.card_picture}>
      <img src={props.picture} alt={props.name}/>
    </div>
    
    <div className={styles.contributor_info}>
      <h4 className={styles.name}>
        {props.name}
      </h4>
      <h6 className={styles.profession}>
        {props.profession}
      </h6>
      <p className={styles.description}>
        Don't be scared of the truth because we need to restart the human 
        foundation in truth And I love you like Kanye loves 
        Kanye I love Rick Owens’ bed design but the back is...
      </p>
    </div>
  </div>
)

export default Contributor