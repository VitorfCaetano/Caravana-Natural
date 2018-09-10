import React from 'react'
import Link from 'gatsby-link'

// Components
import Category from './Category'

import philosophy_icon from '../../images/philosophy-icon.svg';
import adventure_icon from '../../images/adventure-icon.svg';
import life_icon from '../../images/life-icon.svg';

import styles from './categories.module.scss' 


const Categories = () => {

  return (
    <nav className={styles.menu_categories_container}>
      <ul className={styles.menu_categories}>
        <Category
          slug={'/filosofia/'}
          icon={philosophy_icon}
          alt={'Philosophy Category'}
          name={'FILOSOFIA'}
          category={styles.philosophy}
        />

        <Category
          slug={'/aventura/'}
          icon={adventure_icon}
          alt={'Adventure Category'}
          name={'AVENTURA'}
          category={styles.adventure}
        />

        <Category
          slug={'/vida/'}
          icon={life_icon}
          alt={'Life Category'}
          name={'VIDA'}
          category={styles.life}
        />
      </ul>
    </nav>
  )
}

export default Categories