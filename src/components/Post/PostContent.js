import React from 'react'
import Link from 'gatsby-link'

import styles from './postContent.module.scss'

const PostContent = (props) => {
console.log(props.content)

return (
  <section className={styles.section}>
    {
      <div dangerouslySetInnerHTML={{__html:props.content.childMarkdownRemark.html}} />
    }
  </section>
)
}

export default PostContent