import React from 'react'

import Categories from '../components/category/Categories'
import Articles from '../components/article/Articles';

const Philosophy = ({data}) => {

  const posts = [];
  if(data.allContentfulPost.edges) {
    posts = data.allContentfulPost.edges;
  }

  return (
    <div>
      <Categories />
      <Articles posts={posts} isFromCategory={true} />
    </div>
  )
}

export default Philosophy

export const pageQuery = graphql`
  query categoryPhilosophyQuery {
    allContentfulPost(
      filter: {
        category: {
          name: {
            eq: "Filosofia"
          }
        }
      },
      sort: {
        fields: [createdAt], order: DESC
      }
    ) {
      edges {
        node {
          id
          title
          slug
          category {
            name
            slug
            logo {
              file {
                url
              }
            }
          }
          createdAt(formatString: "DD/MM/YYYY")
          heroImage {
            sizes(maxWidth: 1450) {
              ...GatsbyContentfulSizes
            }
          }
          heroLink
          author {
            name
          }
        }
      }
    }
  }
`