import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


import Categories from '../components/category/Categories'
import Title from '../components/Post/Title'
import Hero from '../components/Post/Hero'
import PostContent from '../components/Post/PostContent'
import Author from '../components/Post/Author'

class Post extends Component {
  render() {
    const container = {
      margin: '20px auto 40px auto',
      width: "90%",
      maxWidth: '1450px'
    } 

    const { title, createdAt, heroImage, 
      heroLink, content, author } = this.props.data.contentfulPost;
    
    const image = heroImage.sizes;

    const authorName = author.name;
    const authorDescription = author.description;
    const authorPicture = author.picture.file.url;
    
    return (
      <div style={container}>
        <Categories />
        <Title title={title} createdAt={createdAt} />
        <Hero 
          image={image} 
          description={title} 
          credits={heroLink}
        />
        <PostContent content={content} />
        <Author 
          name={authorName}
          description={authorDescription}
          picture={authorPicture}
        />
      </div>
    )
  }  
}

Post.PropTypes = {
  data: PropTypes.object.isRequired
}

export default Post

export const pageQuery = graphql`
  query postQuery($slug: String!){
    contentfulPost(slug: {eq: $slug}) {
      title
      createdAt(formatString: " DD/MM/YYYY")
      heroImage {
        sizes(maxWidth: 1450) {
          ...GatsbyContentfulSizes
        }
      }
      heroLink
      content {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
        description
        picture {
          file {
            url
          }
        }
      }

    }
  }
`