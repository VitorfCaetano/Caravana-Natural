import React from 'react'
import Link from 'gatsby-link'

import styles from './category.module.scss' 

const Category = (props) => (
  <li className={styles.menu_item}>
    <Link to={props.slug}>
      <img src={props.icon} alt={props.alt}/>
      <span className={styles.category_name + ' ' + props.category}>
        {props.name}
      </span>
    </Link>
  </li>
)

export default Category