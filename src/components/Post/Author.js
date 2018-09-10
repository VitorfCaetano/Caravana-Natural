import React from 'react'
import Link from 'gatsby-link'

import styles from './author.module.scss'

const Author = (props) => (
  <div className={styles.author}>
    <img src={props.picture} alt={props.name}/>
    <div className={styles.author_info}>
      {props.name}
    </div>

  </div>
)

export default Author