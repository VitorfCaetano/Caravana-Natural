import React from 'react'
import Link from 'gatsby-link'

import Categories from '../components/category/Categories'
import Banner from '../components/banner/Banner';
import Articles from '../components/article/Articles';


const IndexPage = ({data}) => {

  const mainPost = data.allContentfulPost.edges[0].node;
  const { title, slug, category, createdAt, heroImage,
     heroLink, author } = mainPost;
  const image = heroImage.sizes;
  const categorySlug = category.slug;

  const posts = data.allContentfulPost.edges.slice(1);

  return (
    <div>
      <Categories />
      <Banner 
        image={image}
        title={title}
        author={author.name}
        date={createdAt}
        credits={heroLink}
        slug={categorySlug+slug}
      />
      <Articles posts={posts} />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPost(
      filter: {
        node_locale: {eq: "pt-BR"}
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