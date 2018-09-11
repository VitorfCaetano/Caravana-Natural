import React from 'react'

import Categories from '../components/category/Categories'
import Articles from '../components/article/Articles';

const Adventure = ({data}) => {
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

export default Adventure

export const pageQuery = graphql`
  query categoryAdventureQuery {
    allContentfulPost(
      filter: {
        category: {
          name: {
            eq: "Aventura"
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