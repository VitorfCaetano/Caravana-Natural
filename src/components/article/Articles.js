import React from 'react'
import Link from 'gatsby-link'
import Article from './Article'

import styles from './articles.module.scss' 


const Articles = (props) => {
  let posts = props.posts.map((edge) => {
    if(props.isFromCategory) {
      edge.node.category.slug = "";
    }

    return <Article
      key={edge.node.id}
      category={edge.node.category.name.toLowerCase()}
      categoryLogo={edge.node.category.logo.file.url}
      slug={edge.node.category.slug+edge.node.slug}
      image={edge.node.heroImage.sizes}
      credits={edge.node.heroLink}
      title={edge.node.title}
      author={edge.node.author.name}
    />
  });
  
  return (
    <div className={styles.card_grid}>
      {posts}
    </div>
  )
}

export default Articles